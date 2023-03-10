import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';
import { useSelector, useDispatch } from "react-redux";
import { userData, logout } from "../../pages/User/userSlice";
import { racketData, find, clear } from '../../pages/racketSlice';
import { InputText } from '../InputText/InputText';
import { getSearch } from '../../services/apiCalls';

export const Header = () => {


    const dispatch = useDispatch();

    const initial = {
        token: '',
        user: {}
    }


    const [search, setSearch] = useState([]);

    const datosReduxUsuario = useSelector(userData);
    const datosReduxRackets = useSelector(racketData);

    useEffect(() => {
        if (search !== "") {

            getSearch(search)
                .then(
                    resultado => {

                        dispatch(find({ rackets: resultado.data }))
                    }
                )
                .catch(error => console.log(error));
        } else if (search === "" && datosReduxRackets.rackets.length > 0) {

            dispatch(clear({ choosen: {}, series: [] }));
        }
    }, [search])

    const navigate = useNavigate();

    const logOff = () => {
        dispatch(logout({ userPass: initial }))
        navigate("/")
    }

    const handleSearch = (e) => {
        setSearch(e.target.value);
    }


    const resetHome = () => {

        dispatch(clear({ choosen: {}, rackets: [] }));

        navigate("/")
    }

    const searchErrorHandler = () => {
        dispatch(clear({ choosen: {}, rackets: [] }));

        navigate("/")
    }
    

    return (

        <div className='headerDesign'>
            <div onClick={() => resetHome()} className='logoDesignHeader'><img className='homeAvatar' src={Logo} alt="Home" /></div>
            <div className='searchDesign'>
                <div className='barra'>
                    <InputText
                        type={"text"}
                        name={"search"}
                        placeholder={"Búsqueda"}
                        functionHandler={handleSearch}
                        errorHandler={searchErrorHandler}
                    />
                </div>

            </div>
            <div className='headerLinksDesign'>

                {datosReduxUsuario.userPass.rol === "admin" &&

                    <div onClick={() => navigate("/admin")} className='linkDesign'>
                        Admin
                    </div>
                }

                {datosReduxUsuario.userPass.token !== "" ?

                    (<>
                        <div onClick={() => navigate("/profile")} className='linkDesign' >{datosReduxUsuario.userPass.name}</div>

                        <div className='linkDesign' onClick={() => logOff()}>logout</div>
                    </>)


                    : (
                        <>
                            <div className='linkDesign' onClick={() => setTimeout(() => { navigate("/login") }, 200)}>login</div>
                            <div className='linkDesign' onClick={() => setTimeout(() => { navigate("/register") }, 200)}>register</div>
                        </>
                    )
                }

            </div>
        </div>


    );


};