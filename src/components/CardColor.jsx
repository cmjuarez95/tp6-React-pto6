import React from 'react';
import { Card, Button } from "react-bootstrap";

const CardColor = () => {
    return (
    <Card>
      <Card.Body>
        <div className="d-flex justify-content-between align-items-center">
          <Card.Title className="mb-0">NombreColor</Card.Title>
          <div
            style={{
              width: "30px",
              height: "30px",
              backgroundColor: "tomato", // color fijo de ejemplo
              border: "1px solid #ccc",
              borderRadius: "4px",
            }}
          ></div>
        </div>
        <Button variant="danger" size="sm" className="mt-3">
          Borrar
        </Button>
      </Card.Body>
    </Card>
    );
};

export default CardColor;