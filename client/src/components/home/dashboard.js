import React, { useContext }  from "react";
import Logo from "./images/Logo.png";
import { Container, Row, Col, Button } from "reactstrap";
import { useNavigate } from "react-router-dom";
// import { ImUsers } from "react-icons/im";
import { FcPortraitMode, FcShop, FcRules, FcSettings  } from "react-icons/fc";
import { MdFireplace } from "react-icons/md";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { FiSettings } from "react-icons/fi";
import { FiLogOut } from "react-icons/fi";
import { Link } from "react-router-dom";
import UserContext from '../context/user-context';

const ClienteDashboard = (props) => {
  return (
    <>
      <Container fluid className="espaciado recuadro-reg-log">
        <Row>
          <Col xs={12} sm={12} md={12} lg={12} className="alineacion">
            <img src={Logo} width="200" alt="logo" />
            <Col className="espaciado2">
              <h3>Panel de Control de Quality Pellets NET</h3>
            </Col>
            <p>
              A continuación, selecciona uno de los módulos para visualizar lo
              que necesites trabajar
            </p>
          </Col>
        </Row>
        <Row className="espaciado3">
          <Col className="alineación textos-dash" xs={6} sm={6} md={6} lg={3}>
            <Link to={`../clientes/`}>
              <FcPortraitMode
                color="blue"
                style={{
                  marginRight: "10px",
                  fontSize: "80",
                  textAlign: "center",
                }}
              />
              <p>Nuestros Clientes</p>
            </Link>
          </Col>
          <Col className="alineación textos-dash" xs={6} sm={6} md={6} lg={3}>
            <Link to={`../estufas/`}>
              <FcRules
                color="red"
                style={{
                  marginRight: "10px",
                  fontSize: "80",
                  textAlign: "center",
                }}
              />
              <p>Estufas y Calderas</p>
            </Link>
          </Col>
          <Col className="alineación textos-dash" xs={6} sm={6} md={6} lg={3}>
            <Link to={`../ventas/`}>
              <FcShop
                color="green"
                style={{
                  marginRight: "10px",
                  fontSize: "80",
                  textAlign: "center",
                }}
              />
              <p>Ventas de Pellets y Estufas</p>
            </Link>
          </Col>
          <Col className="alineación textos-dash" xs={6} sm={6} md={6} lg={3}>
            <Link to={`../mantenciones/`}>
              <FcSettings
                color="grey"
                style={{
                  marginRight: "10px",
                  fontSize: "80",
                  textAlign: "center",
                }}
              />
              <p>Instalación y Mantenciones</p>
            </Link>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ClienteDashboard;
