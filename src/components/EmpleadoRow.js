import React from "react";
import { ListGroup, Badge } from "react-bootstrap";

const EmpleadoRow = (props) => {
  return (
    <div>
      <ListGroup.Item className="d-flex my-3">
            <img src={props.imagen} alt="avatar" className="w-25"/>
            <h1 className="text-primary display-6 m-5">{props.nombre}</h1>
            <div className="m-5">
            <p>{props.titulo}<Badge bg="info" className="m-4">{props.departamento}</Badge></p>
            </div>
      </ListGroup.Item>
    </div>
  );
};

export default EmpleadoRow;
