import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./cartwidget.css";

function CartWidget() {
  return (
    <div className="cart">
      <div className="cartItem">
        <button className="indicador">1</button>
        <Link to="carrito">
          <FaShoppingCart />
        </Link>
      </div>
    </div>
  );
}

export default CartWidget;
