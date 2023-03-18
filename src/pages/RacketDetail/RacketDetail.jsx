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
            racketId : detailRdx.choosen._id,
            racketName : detailRdx.choosen.model,
            userId : detailUsr.userPass._id,
            userName : detailUsr.userPass.name,
            date : dayjs().format('DD/MM/YYYY'),
            price: detailRdx.choosen.price
        }

        postSale(body, detailUsr.userPass.token)
            .then(resultado=>{
                setMsg(resultado.data)
            
                setTimeout(()=>{
                    navigate('/');
                },1500);
            })
            .catch(error =>{
                setMsg(error.message)
            })
    }

    return(
        <div className='racketDesign col-xs-12 col-sm-10 col-md-8 col-lg-6'>
            {detailRdx.choosen._id !== '' && (
                <div className='racketDetailCard col-xs-12 col-sm-10 col-md-8 col-lg-6'>
                    
                            <img className='detailPoster' src={`${detailRdx.choosen.image}`} />
                       {console.log(detailRdx)}
                                <div>Modelo: {detailRdx.choosen.model}</div>
                                <div>Marca: {detailRdx.choosen.brand}</div>
                                <div>Tipo: {detailRdx.choosen.type}</div>
                                <div>Estado: {detailRdx.choosen.state}</div>
                                <div>Nivel: {detailRdx.choosen.level}</div>
                                <div>Precio: {detailRdx.choosen.price} €</div>
                                {detailUsr.userPass.token !== '' && (
                                    <div onClick={Sale} className='rentDesign'>Comprar</div>
                                )}
                                <div>{msg}</div>
                </div>
            )}
        </div>
    );
};