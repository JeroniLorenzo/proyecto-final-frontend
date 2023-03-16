import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { InputText } from '../../../common/InputText/InputText';
import './Register.css';
import { postRegistered } from '../../../services/apiCalls';
import { errorCheck } from '../../../services/utiles';
export const Register = () => {
    const [usuario, setUsuario]= useState({
        name: '',
        surname: '',
        email: '',
        password: '',
        phone: '',
        address: ''
    })

    const [usuarioError, setUsuarioError]= useState({
        nameError: '',
        surnameError: '',
        emailError: '',
        passwordError: '',
        phoneError: '',
        addressError: ''
    })

    const navigate = useNavigate();

    const registerInputHandler = (e) => {
        setUsuario((prevState)=>({...prevState,
        [e.target.name] : e.target.value
        }))
    }

    const registerErrorHandler = (e) => {
        let error = '';
        error= errorCheck(e.target.name, e.target.value);
        setUsuarioError((prevState)=>({...prevState,
        [e.target.name + 'Error'] : error
        }))
    }


    const signMe = () => {

        postRegistered(usuario)
            .then(

                  newUser => {
                      console.log(newUser)
                    setTimeout(()=>{
                        navigate("/")
                    },750);

                    
                }
            )
            .catch(error => console.log(error));
    }

    return (
        <div className='registerDesign'>
            <div className='registerForm'>
            <p>Nombre</p>
            <InputText  
                type={'text'} 
                name ={'name'}
                className={usuarioError.nameError === '' ? 'inputDesign' : 'inputDesign inputDesignError'}
                placeholder={'nombre'} 
                functionHandler={registerInputHandler}
                errorHandler={registerErrorHandler}
            />
            <div className='errorText'>
                {usuarioError.nameError}
            </div>

            <p>Apellido</p>
            <InputText 
                type={'text'}
                name = {'surname'}
                className={usuarioError.surnameError === '' ? 'inputDesign' : 'inputDesign inputDesignError'}
                placeholder={'apellido'}
                functionHandler={registerInputHandler}
                errorHandler={registerErrorHandler}
            />
            <div className='errorText'>
                {usuarioError.surnameError}
            </div>

            <p>Email</p>
            <InputText 
                type={'email'} 
                name = {'email'}
                className={usuarioError.emailError === '' ? 'inputDesign' : 'inputDesign inputDesignError'}
                placeholder={'email'} 
                functionHandler={registerInputHandler}
                errorHandler={registerErrorHandler}
            />
            <div className='errorText'>
                {usuarioError.emailError}
            </div>

            <p>Contraseña</p>
            <InputText 
                type={'password'} 
                name = {'password'}
                className={usuarioError.passwordError === '' ? 'inputDesign' : 'inputDesign inputDesignError'} 
                placeholder={'contrasenya'} 
                functionHandler={registerInputHandler}
                errorHandler={registerErrorHandler}
            />
            <div className='errorText'>
                {usuarioError.passwordError}
            </div>
            
            <p>Teléfono de contacto</p>
            <InputText 
                type={'text'} 
                name = {'phone'}
                className={usuarioError.phoneError === '' ? 'inputDesign' : 'inputDesign inputDesignError'} 
                placeholder={'telefono'} 
                functionHandler={registerInputHandler}
                errorHandler={registerErrorHandler}
            />
            <div className='errorText'>
                {usuarioError.phoneError}
            </div>

            <p>Dirección</p>
            <InputText 
                type={'text'} 
                name = {'address'}
                className={usuarioError.addressError === '' ? 'inputDesign' : 'inputDesign inputDesignError'}
                placeholder={'nombre de usuario'} 
                functionHandler={registerInputHandler}
                errorHandler={registerErrorHandler}
            />
            <div className='errorText'>
                {usuarioError.addressError}
            </div>
            <div className='loginButtonDesign' onClick={()=>signMe()}>Sign in</div>
        </div>
            </div>
           
    );
};