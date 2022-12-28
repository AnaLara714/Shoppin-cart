import React from "react";
import ImgProduct from "assets/imgs/ImageProduct.svg";
import BallRed from "assets/icons/ballRed.svg";
import BallGreen from "assets/icons/ballGreen.svg";
import BallPurple from "assets/icons/ballPurple.svg";
import { AddCart, BoxDiv, ColorText, Description, Img, InLine, Name, Price } from "./boxProduct.style";
import { ItemCartContext } from "contexts/itemCart";
import { useNavigate } from "react-router-dom";

interface ProductInfo {
  id: number,
  title: string,
  description: string,
  image: string,
  price: number,
};

export const BoxProduct: React.FC<ProductInfo> = ({id, image, title, description, price}) => {
  const navigate = useNavigate();
  const { addCart } = React.useContext(ItemCartContext);
  
  const onAddCartButtonClick = () => {
    addCart({
      id,
      title,
      image,
      price,
    });
    alert("Produto adicionado ao carrinho!");
  };
  const onProductClick = () => {
    navigate(`/product/${id}`);
  };
  
  return (
    <BoxDiv key={id}>
      <Img>
        <img 
          src={image} 
          className="ImgProduct" 
          alt={title}
          onClick={onProductClick}
        />
      </Img>
      <Name>{`${title.slice(0, 15)}...`}</Name>
      <Description>{description.length < 50 ? description : `${description.slice(0, 55)}...`}</Description>
      <Price>U$ {(price).toFixed(2)}</Price>
      <InLine className="footerProduct">
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
        <AddCart
          onClick={onAddCartButtonClick}
        >
          Adicionar ao carrinho
        </AddCart>
      </InLine>
    </BoxDiv>
  );
};