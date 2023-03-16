import React from 'react';
import './InputText.css';

export const InputText = ({type, name, className, placeholder, functionHandler, errorHandler}) => {

    return (
        <div className='inputDesign col-xs-12 col-sm-4 col-md-4 col-lg-4'>
            <input
                type={type} 
                name={name} 
                className={className}
                placeholder={placeholder}
                onChange={(e)=> functionHandler(e)}
                onBlur={(e)=> errorHandler(e)}
            />
        </div>
        
    )
}