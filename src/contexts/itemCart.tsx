import React from "react";
import { ProductCartInfo, ProductInfo } from "service/interfaces";

interface ItemCartContext {
  addCart: (product: ProductInfo) => void;
  getItemsQuantity: () => number;
  cart: ProductCartInfo[];
};
interface ItemCartProviderProps {
  children: React.ReactNode;
};

export const ItemCartContext = React.createContext<ItemCartContext>(
  {} as ItemCartContext,
);

export const ItemCartProvider: React.FC<ItemCartProviderProps> = ({ children }) => {
  const [products, setProducts] = React.useState<ProductInfo[]>([]);
  const [cart, setCart] = React.useState<ProductCartInfo[]>([]);

  const getItemsQuantity = () => 
    cart.reduce((total, product) => total + product.count, 0);
  

  const addCart = (product: ProductInfo) => {
    const cartList = [...cart];
    const isInCart = cartList.some(item => item.id === product.id);
    if (isInCart) return;

    cartList.push({
      id: product.id,
      title: product.title,
      image: product.image,
      price: product.price,
      count: 1,
    });
    setCart(cartList);
  };
  
  console.log(addCart)
  return (
    <ItemCartContext.Provider value={{
      cart,
      addCart,
      getItemsQuantity,
    }}>
      {children}
    </ItemCartContext.Provider>
  );
};