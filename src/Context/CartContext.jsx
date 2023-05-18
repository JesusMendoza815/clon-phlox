import { createContext, useState, useEffect } from 'react';

// Crea el contexto del carrito de compras
const CartContext = createContext();

// Proveedor del contexto
const CartProvider = ({ children }) => {
  // Define el estado del carrito de compras
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);

  // Agrega un artículo al carrito
  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  // Elimina un artículo del carrito
  const removeFromCart = (itemId) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCartItems);
  };

  // Limpia el carrito de compras
  const clearCart = () => {
    setCartItems([]);
  };

  const totalPrice = () => {
   let sum = 0;
   cartItems.length > 0 
   ? sum = cartItems.reduce((acc, current) => acc + current.price, 0)
   : sum = 0;
  setTotal(sum);
  }

  useEffect(() => {
    totalPrice();
  }, [cartItems])

  // Proporciona los valores y las funciones del contexto
  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, clearCart, total, totalPrice }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartProvider, CartContext };
