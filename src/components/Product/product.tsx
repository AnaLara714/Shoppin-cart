import React from "react";
import { BoxProduct } from "components/boxProduct";
import { ProductDiv } from "./product.style";

export const Product: React.FC = () => {
  return (
    <ProductDiv>
      <BoxProduct/>
      <BoxProduct/>
      <BoxProduct/>
      <BoxProduct/>
    </ProductDiv>
  );
};