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
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>Nombre del usuario</th>
                                                <th>ID usuario</th>
                                                <th>Modelo de la pala</th>
                                                <th>ID pala</th>
                                                <th>Fecha Compra</th>
                                                <th>Precio</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>{sale.userId.name}</td>
                                                <td>{sale.userId._id}</td>
                                                <td>{sale.racketId.model}</td>
                                                <td>{sale.racketId._id}</td>
                                                <td>{sale.date}</td>
                                                <td>{sale.price}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                            </div>
                        )
                    }
                )

            }

        </div>
    );
};