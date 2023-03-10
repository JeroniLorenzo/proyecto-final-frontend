import React from 'react';
import './RacketCard.css';

export const RacketCard = ({racket}) => {
    
    return (
        <div className='racketCardDesign'>
            <div>{racket.model !== '' ? racket.model : "Nombre no disponible"}</div>
            <div><img className='posterDesign' src={`${racket.image}`}/></div>
        </div>
    )
}