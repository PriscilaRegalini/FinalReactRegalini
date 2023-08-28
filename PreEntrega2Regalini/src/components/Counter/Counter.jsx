import useCounter from "../hooks/useCounter";

//Componente donde se puede agregar o quitar un producto al carrito (usa el hook useCounter)

const Counter = ({ stock, initial }) => {
  const { increment, count, decrement } = useCounter(stock, initial);

    if (stock === 0) return <p>No hay unidades disponibles</p> ;

  return (
  
    <div>
      <p> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" className="bi bi-bag svgCarrito" viewBox="0 0 16 16">
              <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"/>
              </svg> {count} unidades
      </p>
      <button type="button" className="btn btn-dark me-2" onClick={decrement}>Quitar</button>
      <button type="button" className="btn btn-dark me-2" onClick={increment}>Agregar</button>
    </div>
   
  );
};

export default Counter;
