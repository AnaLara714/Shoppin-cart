import React from "react";
import ImgProduct from "assets/imgs/imgProduct.svg";
import { InColumn, InLine, LessAmount, MoreAmount, Name, Price, Product, Quantity } from "./productInCart.style";
import { ProductCartInfo } from "service/interfaces";
import { useNavigate } from "react-router-dom";

export const ProductInCart: React.FC<ProductCartInfo> = ({
  id,
  title,
  image,
  price,
  count,
}) => {
  const navigate = useNavigate();

  return (
      <div>
          <Product>
            <InLine>
              <InColumn>
              <img 
                src={image} 
                alt={"foto do produto"}
                className={"imgProduct"}
              />
              </InColumn>
              <InColumn>
              <Name>{`${title.slice(0, 30)}...`}</Name>
              <InLine>
                <Quantity>{count} UND. de</Quantity> 
                <Price className="priceUND">U${price}</Price>
                <LessAmount>-</LessAmount>
                <MoreAmount>+</MoreAmount>
              </InLine>
              <Price>U${(count*price).toFixed(2)}</Price>
              </InColumn>
            </InLine>
          </Product>
        </div>
  );
};