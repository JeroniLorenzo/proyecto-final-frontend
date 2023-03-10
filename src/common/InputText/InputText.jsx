import React from 'react';
import './InputText.css';

export const InputText = ({type, name, className, placeholder, functionHandler, errorHandler}) => {

    return (
        <input 
            type={type} 
            name={name} 
            className={className}
            placeholder={placeholder}
            onChange={(e)=> functionHandler(e)}
            onBlur={(e)=> errorHandler(e)}
        />
    )
}