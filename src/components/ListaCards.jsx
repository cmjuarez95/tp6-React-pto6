import React from 'react';
import { Row, Col } from "react-bootstrap";
import CardColor from "./CardColor";


const ListaCards = ({colores, onDelete}) => {
    return (
    <Row xs={1} sm={2} md={3} lg={4} className="g-3">
      {colores.map((c) => (
        <Col key={c.id}>
          <CardColor color={c} onDelete={onDelete} />
        </Col>
      ))}
    </Row>
    );
};

export default ListaCards;