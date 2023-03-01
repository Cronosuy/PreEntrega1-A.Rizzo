import Button from "../Button/Button";
import styles from "./navbar.module.css";
import CartWidget from "../CartWidget/CartWidget";

const Navbar = () => {
  return (
    <nav className={styles.container}>
      <a href="#">
        <p>Servicios</p>
      </a>
      <a href="#">
        <p>Sobre Nosotros</p>
      </a>
      <a href="#">
        <p>Contacto</p>
      </a>
      <CartWidget />
    </nav>
  );
};

export default Navbar;
