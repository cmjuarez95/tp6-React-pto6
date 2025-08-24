import React from 'react';
import { Card, Button } from "react-bootstrap";

const CardColor = ({color, onDelete}) => {
    return (
      <Card className="shadow-sm h-100">
      <Card.Body className="d-flex flex-column justify-content-between">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <Card.Title className="mb-0">{color.name}</Card.Title>
          <div
            style={{
              width: "30px",
              height: "30px",
              backgroundColor: color.name,
              border: "1px solid #ccc",
              borderRadius: "4px",
            }}
          />
        </div>
        <Button
          variant="danger"
          size="sm"
          onClick={() => onDelete(color.id)}
        >
          Borrar
        </Button>
      </Card.Body>
    </Card>
    );
};

export default CardColor;