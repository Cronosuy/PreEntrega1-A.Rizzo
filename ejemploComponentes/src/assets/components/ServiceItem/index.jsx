import React from "react";
import { useParams } from "react-router-dom";
import Button from "../Button/Button";

const ServiceItem = ({ servicios }) => {
  const { id } = useParams();
  const servicio = servicios.find((servicio) => servicio.id == id);

  return (
    <div>
      <h4>{servicio.title}</h4>
      <img src={servicio.image} alt="" width={200} />
      <h4>{servicio.category}</h4>
      <p>{servicio.description}</p>
      <p>$ {servicio.price}</p>
      <div>
        <Button txtBtn="-" />
        <Button txtBtn="+" />
      </div>
    </div>
  );
};

export default ServiceItem;
