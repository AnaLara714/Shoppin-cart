import React from "react";
import ImgProduct from "assets/imgs/ImageProduct.svg";
import BallRed from "assets/icons/ballRed.svg";
import BallGreen from "assets/icons/ballGreen.svg";
import BallPurple from "assets/icons/ballPurple.svg";
import { AddCart, BoxDiv, ColorText, Description, Img, InLine, Name, Price } from "./boxProduct.style";
export const BoxProduct: React.FC = () => {
  return (
    <BoxDiv>
      <Img>
        <img 
          src={ImgProduct} 
          className="ImgProduct" 
          alt="produto"
        />
      </Img>
      <Name>
        NOME DO PRODUTO
      </Name>
      <Description>
        Descrição do produto, uma breve descrição aqui. Aqui fica uma breve descrição
      </Description>
      <Price>
        R$ 159,00 ou 10x 15,99
      </Price>
      <InLine>
        <ColorText>
          Cores
          <InLine className="colorOptions">
            <img 
              src={BallGreen} 
              alt="ciculo de cor verde"
            />
            <img 
              src={BallPurple} 
              className="BallPurple"
              alt="ciculo de cor verde"
            />
            <img 
              src={BallRed}
              alt="ciculo de cor vermelha"/>
          </InLine>
        </ColorText>
        <AddCart>
          Adicionar ao carrinho
        </AddCart>
      </InLine>
    </BoxDiv>
  );
};