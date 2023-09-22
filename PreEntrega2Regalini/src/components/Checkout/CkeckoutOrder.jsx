import { useContext, useState } from "react";
import CartContext from "../context/CartContext";
import { serverTimestamp } from "firebase/firestore";
import { CartTotal } from "../hooks/CartTotal";
import { OrderItems } from "../hooks/OrderItems";
import { createOrder } from "../services/ApiProducts";
import FieldForm from "./FieldForm";

const CheckoutOrder = () => {
  const [orderId, setOrderId] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { cart, clear, removeItem } = useContext(CartContext);
  const total = CartTotal(cart);

  const handleCheckout = () => {
    const order = {
      buyer: {
        name: name,
        phone: phone,
        email: email,
      },
      items: OrderItems(cart),
      total,
      date: serverTimestamp(),
    };

    setIsLoading(true);
    createOrder(order).then((docRef) => {
      setOrderId(docRef.id);
      setIsLoading(false);
      clear();
    });
  };

const [formState, setFormState] = useState({
    name: '',
    phone: '',
    email: '',
  });

  const { name, phone, email } = formState;

  const onChange = (event) => {
    setFormState({
      ...formState,
      [event.target.name]: event.target.value,
    });
  };

  const isFormValid = name && phone && email;

  function onSubmit(event) {
    event.preventDefault();

  }

//validaciones
const onKeyDown = (event) => {

    const validName = "0123456789";
    const validPhone = " abcdefghijklmnopqrstuvwxyz@/()?¿¡!#$%&.,;";
    const validEmail = " /()?¿¡!#$%&,;";

switch (event.target.name) {
    case "name":
        if (validName.includes(event.key.toLowerCase())) {
            event.preventDefault();
          }
        break;
    case "phone":
        if (validPhone.includes(event.key.toLowerCase())) {
            event.preventDefault();
          }
        break;
    case "email":
        if (validEmail.includes(event.key.toLowerCase())) {
            event.preventDefault();
          }
        break;

    default:
        break;
}
  };
//

 return(
    <div>
      {orderId &&<><div className="resultOrder"><p><strong>{name}</strong>, su compra se ha realizado con exito</p><p >El id de la orden es: <strong> {orderId} </strong></p> </div></> }
      {!orderId && (
        <>
        <div className="order">
          <h1>Resumen de compra</h1>
          <h2 className="titleOrder">Complete los datos para realizar la orden</h2>
            <form className="row g-3 align-items-center" onSubmit={onSubmit}>
                <FieldForm label="Nombre" name="name" onChange={onChange} onKeyDown={onKeyDown}/>
                <FieldForm label="Teléfono" name="phone" onChange={onChange} onKeyDown={onKeyDown}/>
                <FieldForm label="Email" name="email" onChange={onChange} onKeyDown={onKeyDown} />
                <div>
                  <h2 className="titleCheckout">Productos</h2>
                  <ul>
                    {cart.map((item) => (
                      <li key={item.id} className="productCart">
                        <p>{item.title}</p>
                        <p>Cantidad: {item.quantity}</p>
                        <p>Precio por unidad: ${item.price}</p>
                        <p>Subtotal: ${item.price * item.quantity}</p>
                        <button type="button" className="btn btn-dark" onClick={() => removeItem(item.id)}>Eliminar</button>
                      </li>
                    ))}
                  </ul>
                  {isLoading && <>
                        <div className="d-flex justify-content-center">
                            <div className="spinner-border text-primary mt-5" role="status">
                            <span className="visually-hidden">Loading...</span>
                            </div>
                        </div>
                    </>}
                    {!isLoading && (<> 
                    <p>Total: ${total}</p>
                    <button className="btn btn-dark buy" disabled={!isFormValid} onClick={handleCheckout}>COMPRAR</button> 
                    </>)}
                </div>
            </form>
        </div>
        </>
      )}
      
    </div>
  );
};

export default CheckoutOrder;