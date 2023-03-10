import axios from 'axios';

const root = 'http://localhost:5500/';

export const postLogin = async (credenciales) => {

    return await axios.post(`${root}users/login`, credenciales);
};

export const postRegistered = async (body) => {

    return await axios.post(`${root}users/`, body)
};

export const getRackets = async () => {

    return await axios.get(`${root}rackets/`);

};

export const getSearch = async (busqueda, token) => {
    let config = {
        headers: { Authorization: `Bearer ${token}` }
    };
    console.log('entras aqui', busqueda)

    return await axios.get(`${root}rackets/?tittle=${busqueda}`, config);
};

export const postSale= async (body, token) => {

    let config = {
        headers: { Authorization: `Bearer ${token}` }
    };
    return await axios.post(`${root}sales/newSale`, body, config);
};

export const allSalesAdmin = async (token) => {

    let config = {
        headers: { Authorization: `Bearer ${token}` },
    };
    return await axios.get(`${root}sales/getAll`, config);

};

export const userSales = async (token, id) => {

    let config = {
        headers: { Authorization: `Bearer ${token}` },
    };
    return await axios.get(`${root}sales/userSales/${id}`, config);

};