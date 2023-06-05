import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import { BsHouseDoor } from "react-icons/bs";
import { Container, Col, Row } from "reactstrap";
import {
  FcPortraitMode,
  FcHome,
  FcShop,
  FcRules,
  FcSettings,
} from "react-icons/fc";
import Logo from "../home/images/Logo.png";
import ClienteList from "./list";

const ClientesAdmin = (props) => {
  return (
    <>
      <Container fluid className="recuadro-nc">
        <Row>
          <Col xs={6} sm={6} md={6} lg={9} className="pt_2 pb_2 ta_l">
            <h3>
              <FcPortraitMode className="fs_10 ta_r pr_1" />
              Nuestros Clientes
            </h3>
          </Col>
          <Col xs={6} sm={6} md={6} lg={3} className="pt_2 ta_r">
            <Link to="/">
              <FcHome className="fs_8 mr_1" />
            </Link>
            <Link to="../estufas/">
              <FcRules className="fs_8  mr_1" />
            </Link>
            <Link to="../ventas/">
              <FcShop className="fs_8  mr_1" />
            </Link>
            <Link to="../mantenciones/">
              <FcSettings className=" fs_8 mr_1" />
            </Link>
          </Col>
        </Row>
        <Row>
          <Routes>
            <Route path="/" element={<ClienteList />} />
          </Routes>
        </Row>
      </Container>
    </>
  );
};

export default ClientesAdmin;
