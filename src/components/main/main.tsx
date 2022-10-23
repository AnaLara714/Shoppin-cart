import React from "react";
import { BoxProduct } from "components/boxProduct";
import { MainDiv } from "./main.style";

export const Main: React.FC = () => {
  return (
    <MainDiv>
      <BoxProduct/>
      <BoxProduct/>
      <BoxProduct/>
      <BoxProduct/>
    </MainDiv>
  );
};