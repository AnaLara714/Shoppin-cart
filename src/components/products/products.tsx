import React, { useEffect, useState } from "react";
import { BoxProduct } from "components/boxProduct";
import { ProductDiv } from "./products.style";
import { api } from "service/api";
import { ItemCartContext } from "contexts/itemCart"

interface ProductInfo {
  id: number,
  title: string,
  description: string,
  image: string,
  price: number,
  count?: number,
};
export const Products: React.FC = () => {
  const [data, setData] = useState<ProductInfo[]>([]);
  const { setProducts } = React.useContext(ItemCartContext);
  
  const fecthData = async() => {
    const response = await api.get("/products");
    setData(response.data);
    setProducts(response.data)
    console.log(response?.data);
  };

  useEffect(() => {
    fecthData()
  }, [])

  return (
    <ProductDiv>
      {data?.map(item => 
       <BoxProduct 
        id={item.id} 
        title={item.title} 
        description={item.description} 
        image={item.image} 
        price={item.price}
      />
      )}
    </ProductDiv>
  );
};