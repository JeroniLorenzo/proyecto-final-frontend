import React, { useState, useEffect } from 'react';
import { RacketCard } from '../../common/RacketCard/RacketCard';
import { getRackets } from '../../services/apiCalls';
import './Home.css';
import Loading from './loading.gif';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { racketData, select } from '../racketSlice';


export const Home = () => {

    const dispatch = useDispatch();

    const datosReduxRackets = useSelector(racketData)

    const navigate = useNavigate();

    const [rackets, setRackets] = useState([]);

    useEffect(() => {

        if (rackets.length === 0) {

            setTimeout(() => {

                getRackets()
                    .then(
                        resultado => {

                            setRackets(resultado.data);
                        }
                    )
                    .catch(error => console.log(error));

            }, 1000);

        };

    }, [rackets]);

    const Choosen = (racket) => {

        dispatch(select({ choosen: racket }))

        navigate("/detail");


    }

    return (
        <div className='homeDesign'>

            {datosReduxRackets.rackets.length > 0 ? (

                <div className='rosterDesign col-xs-12 col-sm-10 col-md-10 col-lg-10'>
                    {datosReduxRackets.rackets.map(
                        racket => {

                            return (
                                <div className='design col-xs-12 col-sm-10 col-md-10 col-lg-10' key={racket._id}>
                                    <div onClick={() => Choosen(racket)} >
                                        <RacketCard racket={racket} />
                                    </div>
                                </div>


                            )
                        }
                    )}
                </div>


            ) :

                (
                    rackets.length > 0 ? (

                        <div className='rosterDesign'>
                            {rackets.map(
                                racket => {
                                    return (
                                        <div onClick={() => Choosen(racket)} key={racket._id}>
                                            <RacketCard racket={racket} />
                                        </div>
                                    )
                                }
                            )}
                        </div>

                    ) : (

                        <div><img className="loadingGif" src={Loading} alt="Cargando" /></div>

                    )

                )

            }

        </div>
    );
};