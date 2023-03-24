import React, { useState, useEffect } from 'react';
import './Admin.css';
import { allSalesAdmin } from '../../../services/apiCalls';
import { userData } from '../userSlice';
import { useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux";
import { InputText } from '../../../common/InputText/InputText';
import { postRegisteredRacket } from '../../../services/apiCalls';
import { errorCheck } from '../../../services/utiles';


export const Admin = () => {
    const navigate = useNavigate();
    const userRDX = useSelector(userData);
    const [sales, setSales] = useState([]);

    useEffect(() => {
        if (userRDX.userPass.roleId === "63fce07fd7d5a2f9bc3257c2") {
            navigate("/admin");
        }

    }, [])

    useEffect(() => {

        if (sales.length === 0) {

            setTimeout(() => {
                allSalesAdmin(userRDX.userPass.token)
                    .then(
                        resultado => {

                            setSales(resultado.data);

                        }
                    )
                    .catch(error => console.log(error));

            }, 1000);

        };

    }, [sales]);

    const [racket, setRacket] = useState({
        model: '',
        price: '',
        level: '',
        type: '',
        image: '',
        brand: '',
        state: ''
    })

    const [racketError, setRacketError] = useState({
        modelError: '',
        priceError: '',
        levelError: '',
        typeError: '',
        imageError: '',
        brandError: '',
        stateError: ''
    })


    const registerInputHandler = (e) => {
        setRacket((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    const registerErrorHandler = (e) => {
        let error = '';
        error = errorCheck(e.target.name, e.target.value);
        setRacketError((prevState) => ({
            ...prevState,
            [e.target.name + 'Error']: error
        }))
    }


    const postRacket = () => {
        
        postRegisteredRacket(racket)
            .then(

                newRacket => {
                    console.log(newRacket)
                    setTimeout(() => {
                        navigate("/")
                    }, 750);


                }
            )
            .catch(error => console.log(error));
    }

    return (
        <div className='homeDesign'>
            <div className='registerForm'>
                                    <p>Modelo</p>
                                    <InputText
                                        type={'text'}
                                        name={'model'}
                                        className={racketError.modelError === '' ? 'inputDesign' : 'inputDesign inputDesignError'}
                                        placeholder={'Modelo'}
                                        functionHandler={registerInputHandler}
                                        errorHandler={registerErrorHandler}
                                    />
                                    <div className='errorText'>
                                        {racketError.modelError}
                                    </div>

                                    <p>Precio</p>
                                    <InputText
                                        type={'text'}
                                        name={'price'}
                                        className={racketError.priceError === '' ? 'inputDesign' : 'inputDesign inputDesignError'}
                                        placeholder={'Precio'}
                                        functionHandler={registerInputHandler}
                                        errorHandler={registerErrorHandler}
                                    />
                                    <div className='errorText'>
                                        {racketError.priceError}
                                    </div>

                                    <p>Nivel</p>
                                    <InputText
                                        type={'text'}
                                        name={'level'}
                                        className={racketError.levelError === '' ? 'inputDesign' : 'inputDesign inputDesignError'}
                                        placeholder={'Nivel'}
                                        functionHandler={registerInputHandler}
                                        errorHandler={registerErrorHandler}
                                    />
                                    <div className='errorText'>
                                        {racketError.levelError}
                                    </div>

                                    <p>Tipo</p>
                                    <InputText
                                        type={'text'}
                                        name={'type'}
                                        className={racketError.typeError === '' ? 'inputDesign' : 'inputDesign inputDesignError'}
                                        placeholder={'Tipo'}
                                        functionHandler={registerInputHandler}
                                        errorHandler={registerErrorHandler}
                                    />
                                    <div className='errorText'>
                                        {racketError.typeError}
                                    </div>

                                    <p>Imágen</p>
                                    <InputText
                                        type={'text'}
                                        name={'image'}
                                        className={racketError.imageError === '' ? 'inputDesign' : 'inputDesign inputDesignError'}
                                        placeholder={'Imágen'}
                                        functionHandler={registerInputHandler}
                                        errorHandler={registerErrorHandler}
                                    />
                                    <div className='errorText'>
                                        {racketError.imageError}
                                    </div>

                                    <p>ID  de la marca</p>
                                    <InputText
                                        type={'text'}
                                        name={'brand'}
                                        className={racketError.brandError === '' ? 'inputDesign' : 'inputDesign inputDesignError'}
                                        placeholder={'ID de la marca'}
                                        functionHandler={registerInputHandler}
                                        errorHandler={registerErrorHandler}
                                    />
                                    <div className='errorText'>
                                        {racketError.brandError}
                                    </div>

                                    <p>ID  del estado</p>
                                    <InputText
                                        type={'text'}
                                        name={'state'}
                                        className={racketError.stateError === '' ? 'inputDesign' : 'inputDesign inputDesignError'}
                                        placeholder={'ID del estado'}
                                        functionHandler={registerInputHandler}
                                        errorHandler={registerErrorHandler}
                                    />
                                    <div className='errorText'>
                                        {racketError.stateError}
                                    </div>
                                    <div className='loginButtonDesign' onClick={() => postRacket()}>Subir pala</div>
                                </div>

            {sales.length > 0 &&

                sales.map(
                    sale => {

                        return (
                            <div key={sale._id}>
                                <div>
                                    <div>Nombre: {sale.userId.name}</div>
                                    <div>ID Usuario: {sale.userId._id}</div>
                                    <div>Modelo: {sale.racketId.model}</div>
                                    <div>ID Pala: {sale.racketId._id}</div>
                                    <div>Fecha: {sale.date}</div>
                                    <div>Precio: {sale.price}€</div>
                                    <div>--------------------------------------</div>
                                </div>
                                

                            </div>



                        )
                    }
                )

            }

        </div>

    );

};


