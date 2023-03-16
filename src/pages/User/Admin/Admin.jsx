import React, { useState, useEffect } from 'react';
import './Admin.css';
import { allSalesAdmin } from '../../../services/apiCalls';
import { userData } from '../userSlice';
import { useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux";


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

    return (
        <div className='homeDesign'>

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