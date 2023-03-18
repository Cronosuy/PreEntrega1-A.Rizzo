import Button from "../Button/Button";
import styles from "./navbar.module.css";
import CartWidget from "../CartWidget/CartWidget";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  let activeStyle = {
    textDecoration: "underline",
  };

  return (
    <nav className={styles.container}>
      <NavLink
        to="/"
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        <p>Sobre Nosotros</p>
      </NavLink>

      <NavLink
        to="servicios"
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        <p>Servicios</p>
      </NavLink>

      <NavLink
        to="contacto"
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        <p>Contacto</p>
      </NavLink>

      <CartWidget />
    </nav>
  );
};

export default Navbar;
