import React, { useState, useEffect } from 'react';
import './Profile.css';
import { useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux";
import { userData } from '../userSlice';
import { userSales } from '../../../services/apiCalls';




export const Profile = () => {

    const navigate = useNavigate();
    const [sales, setSales] = useState([]);
    const userRDX = useSelector(userData);

    useEffect(() => {
        if (userRDX.userPass.token === '') {
            navigate('/');
        };
    }, []);

    useEffect(() => {

        if (sales.length === 0) {

            setTimeout(() => {

                userSales(userRDX.userPass.token, userRDX.userPass._id)


                    .then(
                        resultado => {

                            setSales(resultado.data);

                        }
                    )
                    .catch(error => console.log(error));

            }, 1000);

        };

    }, [sales]);

    return (
        <div className='profileDesign col-xs-12 col-sm-4 col-md-4 col-lg-4'>

            <div className='profileCard col-xs-12 col-sm-4 col-md-4 col-lg-4'>
                <header id="cabecera col-xs-12 col-sm-4 col-md-4 col-lg-4">Datos del usuario</header>
                <div>
                    <p>Nombre:</p>
                    {userRDX.userPass.name}
                </div>
                <div>
                    <p>Apellido:</p>
                    {userRDX.userPass.surname}
                </div>
                <div>
                    <p>Email:</p>
                    {userRDX.userPass.email}
                </div>
                <div>
                    <p>Teléfono de contacto:</p>
                    {userRDX.userPass.phone}
                </div>
                <div>
                    <p>Dirección:</p>
                    {userRDX.userPass.address}
                </div>
            </div>
            <div>
                <p>Historial de Compras</p>
            </div>

            {sales.length > 0 &&
                sales.map(
                    sale => {
                        return (
                            <div key={sale._id}>

                                <div>{sale.racketId}</div>
                                <div>{sale.date}</div>
                                <div>{sale.price} €</div>

                            </div>
                        )
                    }
                )

            }

        </div>


    )
};