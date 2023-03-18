import { Link } from "react-router-dom";
import Button from "../Button/Button";
import styles from "./card.module.css";

const Card = ({ servicio }) => {
  return (
    <Link to={`${servicio.id}`}>
      <div className={styles.container}>
        <h4>{servicio.title}</h4>
        <img src={servicio.image} alt="" width={200} />
        <p>$ {servicio.price}</p>
        <div className={styles.btnCard}>
          <Button txtBtn="-" />
          <Button txtBtn="+" />
        </div>
      </div>
    </Link>
  );
};

export default Card;
