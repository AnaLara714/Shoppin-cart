import { Price } from "components/boxProduct/boxProduct.style";
import React from "react";
import { ProductCartInfo, ProductInfo } from "service/interfaces";

interface ItemCartContext {
  addCart: (product: ProductInfo) => void;
  getItemsQuantity: () => number;
  getTotal: () => number;
  getProduct: (id: number) => ProductInfo | undefined;
  incrementCountCart: (id: number) => void;
  decrementCountCart: (id: number) => void;
  removeItemCart: (id: number) => void;
  setProducts: React.Dispatch<React.SetStateAction<ProductInfo[]>>;
  cart: ProductCartInfo[];
  products: ProductInfo[];
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
  const getProduct = (id: number) => {
    products.find(product => product.id === id);
    console.log(getProduct(products))
    return;
  }

  
    
  const getItemsQuantity = () => 
    cart.reduce((total, product) => total + product.count, 0);
  const getTotal = () => 
    cart.reduce((total, product) => total + product.count * product.price, 0) 
  const incrementCountCart = (id: number) => {
    const cartList = cart.map(product => {
      if (product.id === id) product.count += 1;
      return product;
    });
    setCart(cartList);
  };
  const decrementCountCart = (id: number) => {
    const cartList = cart.map(product => {
      if (product.id === id && product.count > 1) product.count -= 1;
      return product;
    })
    setCart(cartList);
  };
  const removeItemCart = (id: number) => {
    const cartList = cart.filter(product => product.id !== id);
    setCart(cartList);
  };
  
  return (
    <ItemCartContext.Provider value={{
      setProducts,
      cart,
      products,
      addCart,
      getItemsQuantity,
      getTotal,
      getProduct,
      incrementCountCart,
      decrementCountCart,
      removeItemCart,
    }}>
      {children}
    </ItemCartContext.Provider>
  );
};