import Button from "../Button/Button";
import styles from "./navbar.module.css";
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className={styles.container}>
      <Link to="/">
        <p>Sobre Nosotros</p>
      </Link>

      <Link to="servicios">
        <p>Servicios</p>
      </Link>

      <Link to="contacto">
        <p>Contacto</p>
      </Link>

      <CartWidget />
    </nav>
  );
};

export default Navbar;
