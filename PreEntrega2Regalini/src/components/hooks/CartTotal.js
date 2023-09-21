export const CartTotal = (cart) => {
    return cart.reduce((acc, item) => acc + item.quantity * item.price, 0);
  };