import { FaShoppingCart } from "react-icons/fa";
import "./cartwidget.css";

function CartWidget() {
  return (
    <div className="cart">
      <div className="cartItem">
        <button className="indicador">1</button>
        <FaShoppingCart />
      </div>
    </div>
  );
}

export default CartWidget;
