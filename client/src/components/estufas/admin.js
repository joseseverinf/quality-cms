import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { BsHouseDoor } from "react-icons/bs";
import { Container, Col, Row } from "reactstrap";
import Logo from '../home/images/Logo.png';
import { FcPortraitMode,FcHome, FcShop, FcRules, FcSettings  } from "react-icons/fc";
import EstufaList from './list';


const EstufasAdmin = (props) => {

    return <>
    <Container fluid className="recuadro-nc">
        <Row>
            <Col xs={4} sm={4} md={3} lg={3} className="espaciado4 alineacion">
            <Link to={`/`}><img src={Logo} width="150" alt='logo'/></Link>
            </Col>
            <Col xs={4} sm={4} md={6} lg={6} className="espaciado4 alineacion-left">
                <h3><FcRules color="red" style={{ marginRight: '10px', fontSize: '50', textAlign: 'center'}}/>Estufas y Calderas</h3>
            </Col>
            <Col xs={4} sm={4} md={3} lg={3} className="espaciado4 alineacion-right">
                <Link to="/"><FcHome color="black" size={32}  style={{ marginRight: '10px'}} /></Link>
                <Link to="../clientes/"><FcPortraitMode color="blue" size={32}  style={{ marginRight: '10px'}} /></Link>
                <Link to="../ventas/"><FcShop color="green" size={32}  style={{ marginRight: '10px'}} /></Link>
                <Link to="../mantenciones/"><FcSettings color="gray" size={32}  style={{ marginRight: '10px'}} /></Link>
            </Col>
        </Row>
        <Row>
            <Routes>
                <Route path="/" element={ <EstufaList /> } />
            </Routes>
        </Row>
    </Container>
    </>
}

export default EstufasAdmin;