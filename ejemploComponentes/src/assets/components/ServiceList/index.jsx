import Card from "../Card";
import styles from "./serviceList.module.css";

const ServiceList = ({ servicios }) => {
  return (
    <div className={styles.container}>
      {servicios.map((servicio) => (
        <Card key={servicio.id} servicio={servicio} />
      ))}
    </div>
  );
};

export default ServiceList;
