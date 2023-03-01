import Item from "../Item/Item";

const List = ({ servicios }) => {
  return (
    <ul>
      <Item servicio={servicios[0]} />
      <Item servicio={servicios[1]} />
      <Item servicio={servicios[2]} />
    </ul>
  );
};

export default List;
