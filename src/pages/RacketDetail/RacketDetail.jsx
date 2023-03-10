import React, { useState } from 'react';
import './RacketDetail.css';
import dayjs from 'dayjs';
import { useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux";
import { racketData } from '../racketSlice';
import { userData } from '../User/userSlice';
import { postSale } from '../../services/apiCalls';

export const RacketDetail = () => {

    const detailRdx = useSelector(racketData);
    const detailUsr = useSelector(userData);
    const navigate = useNavigate();
    const [msg, setMsg] = useState('');

    const Sale = () => {
        
        let body = {
            idRacket : detailRdx.choosen._id,
            racketName : detailRdx.choosen.model,
            idUser : detailUsr.userPass._id,
            nameUser : detailUsr.userPass.name,
            saleDate : dayjs().format('DD/MM/YYYY'),
            price: detailRdx.choosen.price
        }

        postSale(body, detailUsr.userPass.token)
            .then(resultado=>{
                setMsg(resultado.data.data)

                setTimeout(()=>{
                    navigate('/');
                },1500);
            })
            .catch(error =>{
                setMsg(error.message)
            })
    }

    return(
        <div className='racketDesign'>
            {detailRdx.choosen._id !== '' &&
            
                <div className='racketDetailCard'>
                    <div><img className='detailPoster' src={`${detailRdx.choosen.image}`}/></div>
                    <div>{detailRdx.choosen.model}</div>
                    <div>{detailRdx.choosen.brand}</div>
                    <div>{detailRdx.choosen.type}</div>
                    <div>{detailRdx.choosen.state}</div>
                    <div>{detailRdx.choosen.level}</div>
                    <div>{detailRdx.choosen.price}</div>

            
                    {detailUsr.userPass.token !== '' &&
                    
                        <div onClick={()=>Sale()} className='rentDesign'>Comprar</div>
                        
                    }
                    
                      <div>{msg}</div>
                </div>
            
            }
        </div>
    )

};