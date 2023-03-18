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
        <div className='profileDesign'>

            <div className='profileCard'>
                <header className="cabecera">Datos del usuario</header>
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
            <header className="cabecera">Historial de Compras</header>
            </div>

            {sales.length > 0 &&
                sales.map(
                    sale => {
                        return (
                            <div key={sale._id}>
                                <div>ID Pala: {sale.racketId}</div>
                                <div>Fecha de compra: {sale.date}</div>
                                <div>Precio: {sale.price} €</div>
                                <div>-----------------------</div>

                            </div>
                        )
                    }
                )

            }

        </div>


    )
};