export const CartQuantity = (cart) => {
   return cart.reduce((acc, item) => acc + item.quantity, 0)
  };
  