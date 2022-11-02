import React from "react";
import ImgProduct from "assets/imgs/imgProduct.svg";
import { InColumn, InLine, LessAmount, MoreAmount, Name, Price, Product, Quantity } from "./productInCart.style";

export const ProductInCart: React.FC = () => {
  return (
      <div>
          <Product>
            <InLine>
              <InColumn>
              <img 
                src={ImgProduct} 
                alt={"foto do produto"}
                className={"imgProduct"}
              />
              </InColumn>
              <InColumn>
              <Name>NOME DO PRODUTO</Name>
              <InLine>
                <Quantity>1 UND. de</Quantity> 
                <Price className="priceUND">R$256,55</Price>
                <LessAmount>-</LessAmount>
                <MoreAmount>+</MoreAmount>
              </InLine>
              <Price>R$566,55</Price>
              </InColumn>
            </InLine>
          </Product>
        </div>
  );
};