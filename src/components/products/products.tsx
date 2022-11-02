import React from "react";
import { BoxProduct } from "components/cardProduct";
import { ProductDiv } from "./products.style";

export const Products: React.FC = () => {
  return (
    <ProductDiv>
      <BoxProduct/>
      <BoxProduct/>
      <BoxProduct/>
      <BoxProduct/>
    </ProductDiv>
  );
};