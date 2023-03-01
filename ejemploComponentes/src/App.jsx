import "./App.css";
import Button from "./assets/components/Button/Button";
import List from "./assets/components/List/List";
import Navbar from "./assets/components/Navbar/Navbar";

const servicios = ["DE OTRO MUNDO", "VIP", "ESTANDAR"];

const App = () => {
  const handleClick = () => {
    alert("Click me!");
  };

  return (
    <div>
      <Navbar />
      <h1>CRONOS BARBER</h1>
      <List servicios={servicios} />
      <Button txtBtn="Reservar" handleClick={handleClick} />
      <Button txtBtn="Pagar" handleClick={handleClick} />
    </div>
  );
};

export default App;
