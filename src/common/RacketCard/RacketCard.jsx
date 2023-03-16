import React from 'react';
import './RacketCard.css';


export const RacketCard = ({ racket }) => {
  return (

    <div className='racketCardDesign col-xs-12 col-sm-4 col-md-4 col-lg-4'>
      <div className='textCardDesign'>{racket.model !== '' ? racket.model : "Modelo no disponible"}</div>
      <div><img className='posterDesign' src={`${racket.image}`} /></div>
      
    </div>

  )
}