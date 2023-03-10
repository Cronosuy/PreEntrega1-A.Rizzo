import styles from "./card.module.css";

const Card = ({ servicio }) => {
  return (
    <div className={styles.container}>
      <h4>{servicio.title}</h4>
      <img src={servicio.image} alt="" width={200} />
      <p>{servicio.description}</p>
      <p>$ {servicio.price}</p>
    </div>
  );
};

export default Card;
