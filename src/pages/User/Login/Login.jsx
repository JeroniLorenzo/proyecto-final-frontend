import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { InputText } from '../../../common/InputText/InputText';
import { postLogin } from '../../../services/apiCalls';
import { Decoder, errorCheck } from '../../../services/utiles';
import { useSelector, useDispatch } from "react-redux";
import { userData, login } from '../userSlice';
import './Login.css';

export const Login = () => {

    const dispatch = useDispatch();

    const datosReduxUsuario = useSelector(userData);

    const [credenciales, setCredenciales] = useState({
        email: '',
        password: ''
    })
    const [credencialesError, setCredencialesError] = useState({
        emailError: '',
        passwordError: ''
    })

    const navigate = useNavigate();

    const InputHandler = (e) => {
        
        setCredenciales((prevState)=>({...prevState, 
            [e.target.name] : e.target.value
            
        }));;
    }

    const Logeame = () => {

        /* Checking if there is any error in the form. */
        for(const property in credencialesError){
            if(credencialesError[property]!== ''){
                return;
            }
        }

        postLogin(credenciales)
            .then(
                resultado => {

                    let decodificado = Decoder(resultado.data.token);

                    let userPass = {
                        token : resultado.data.token,
                        user: decodificado._id,
                        _id: resultado.data.user[0]._id,
                        name: resultado.data.user[0].name,
                        surname: resultado.data.user[0].surname,
                        email: resultado.data.user[0].email,
                        address: resultado.data.user[0].address,
                        phone: resultado.data.user[0].phone,
                        roleId: resultado.data.user[0].roleId

                    }
                        
                    dispatch(login({userPass: userPass}));

                    setTimeout(()=>{
                        navigate("/")
                    },750);
                }
            )
            .catch(error => console.log(error));
    }
    
    useEffect(()=>{
        if(datosReduxUsuario.userPass.token !== ''){
            navigate("/");
        }
    },[])

    const loginErrorHandler = (e)=>{
        let error = '';

        error = errorCheck(e.target.name, e.target.value);

        setCredencialesError((prevState)=>({...prevState,
        [e.target.name + 'Error']: error
    }));

    }

    return (
        <div className='loginDesign col-xs-12 col-sm-10 col-md-10 col-lg-10'>
            <p>Email de usuario</p>
            <InputText 
                type={"email"} 
                name={"email"}
                className={credencialesError.emailError === '' ? 'inputDesign' : 'inputDesign inputDesignError'}
                placeholder={"Escribe tu email"} 
                functionHandler={InputHandler}
                errorHandler={loginErrorHandler}
            />
            <div className='errorText'>
                {credencialesError.emailError}
            </div>
            <p>Contraseña</p>
            <InputText 
                type={"password"} 
                name={"password"}
                className={credencialesError.passwordError === '' ? 'inputDesign' : 'inputDesign inputDesignError'} 
                placeholder={"Escribe tu contraseña"} 
                functionHandler={InputHandler}
                errorHandler={loginErrorHandler}
            />
            <div className='errorText'>
                {credencialesError.passwordError}
            </div>

            <div className='loginButtonDesign col-xs-12 col-sm-10 col-md-10 col-lg-10' onClick={()=>Logeame()}>LOGIN</div>
        </div>
    );
};