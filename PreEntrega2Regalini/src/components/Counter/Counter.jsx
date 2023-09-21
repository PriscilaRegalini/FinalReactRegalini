import useCounter from "../hooks/useCounter";
import CartContext from "../context/CartContext";
import { useContext } from "react";

// agrega o quita un producto al carrito (usa el hook useCounter)

const Counter = ({ stock, initial, product}) => {
  const { increment, count, decrement } = useCounter(stock, initial, product);

  const { addItem } = useContext(CartContext);

    if (stock === 0) return <p>No hay unidades disponibles</p> ;

  return (
  <>
    <div className="divAddCart" >
      <p>{count} unidades</p>
      <button type="button" className="btn btn-dark me-2" onClick={decrement}>-</button>
      <button type="button" className="btn btn-dark me-2" onClick={increment}>+</button> 
    </div>
    <div>
      <button type="button" className="btn btn-dark me-2 buttonAddCart" onClick={() => addItem(product, 1, count)}>Agregar al carrito</button>
    </div>
  </>
  );
};

export default Counter;
