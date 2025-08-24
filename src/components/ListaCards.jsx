import React from 'react';
import { Row, Col } from "react-bootstrap";
import CardColor from "./CardColor";

const ListaCards = () => {
    return (
    <Row xs={1} sm={2} md={3} lg={4} className="g-3 mt-2">
      <Col>
        <CardColor />
      </Col>
      <Col>
        <CardColor />
      </Col>
      <Col>
        <CardColor />
      </Col>
    </Row>
    );
};

export default ListaCards;