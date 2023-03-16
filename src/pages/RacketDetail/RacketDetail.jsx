import React, { useState } from 'react';
import './RacketDetail.css';
import dayjs from 'dayjs';
import { useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux";
import { racketData } from '../racketSlice';
import { userData } from '../User/userSlice';
import { postSale } from '../../services/apiCalls';
import { Button, Card, Col, Container, Image, Row } from 'react-bootstrap';

export const RacketDetail = () => {
    const detailRdx = useSelector(racketData);
    const detailUsr = useSelector(userData);
    const navigate = useNavigate();
    const [msg, setMsg] = useState('');

    const Sale = () => {
        let body = {
            racketId : detailRdx.choosen._id,
            racketName : detailRdx.choosen.model,
            userId : detailUsr.userPass._id,
            userName : detailUsr.userPass.name,
            date : dayjs().format('DD/MM/YYYY'),
            price: detailRdx.choosen.price
        }

        postSale(body, detailUsr.userPass.token)
            .then(resultado=>{
                setMsg(resultado.data)
            
                setTimeout(()=>{
                    navigate('/');
                },1500);
            })
            .catch(error =>{
                setMsg(error.message)
            })
    }

    return(
        <Container className='racketDesign'>
            {detailRdx.choosen._id !== '' && (
                <Card className='racketDetailCard'>
                    <Row>
                        <Col xs={12} md={6}>
                            <Image className='detailPoster' src={`${detailRdx.choosen.image}`} fluid />
                        </Col>
                        <Col xs={12} md={6}>
                            <Card.Body>
                                {console.log(detailRdx)}
                                <Card.Text>Modelo: {detailRdx.choosen.model}</Card.Text>
                                <Card.Text>Marca: {detailRdx.choosen.brand}</Card.Text>
                                <Card.Text>Tipo: {detailRdx.choosen.type}</Card.Text>
                                <Card.Text>Estado: {detailRdx.choosen.state}</Card.Text>
                                <Card.Text>Nivel: {detailRdx.choosen.level}</Card.Text>
                                <Card.Text>Precio: {detailRdx.choosen.price} €</Card.Text>
                                {detailUsr.userPass.token !== '' && (
                                    <Button onClick={Sale} className='rentDesign'>Comprar</Button>
                                )}
                                <div>{msg}</div>
                            </Card.Body>
                        </Col>
                    </Row>
                </Card>
            )}
        </Container>
    );
};