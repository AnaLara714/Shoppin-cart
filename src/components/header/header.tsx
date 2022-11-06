import React from "react";
import { useNavigate } from "react-router-dom";
import Logo from "assets/imgs/LogoCompleta.svg"; 
import IconCarrinho from "assets/icons/carrinho.svg";
import fotoUsuario from "assets/imgs/fotoUsuario.svg";
import {NumberCart, TextHeader, HeaderDiv, BoxDiv, CartGo} from "./header.style"; 
import { ShoppingCartRoutes } from "components/constants";
import { ItemCartContext } from "contexts/itemCart";

export const Header: React.FC = () => {
  const navigate = useNavigate();
  const {getItemsQuantity} = React.useContext(ItemCartContext);
  const itemsQuantity = getItemsQuantity();
  
  const onHomeButtonClick = () =>  {
    navigate(ShoppingCartRoutes.product);
  };
  const onCartButtonClick = () =>  {
    navigate(ShoppingCartRoutes.cart);
  };
  
  return (
    <HeaderDiv>
      <BoxDiv>
        <img src={Logo} alt={"Logo"} className="ImgLogo"/>
      </BoxDiv>
      <BoxDiv>
        <BoxDiv className="OptionsHeader">
          <TextHeader
            onClick={onHomeButtonClick}
          >
            INICIO
          </TextHeader>
        </BoxDiv>
        <CartGo onClick={onCartButtonClick}>
        <img 
          src={IconCarrinho} 
          alt={"icone do carrinho"} 
          className={"cart"}
        />
        <NumberCart>
            {itemsQuantity}
        </NumberCart> 
        <img className={"photoUser"} src={fotoUsuario} alt={"foto do usuario"}/>
        </CartGo>
      </BoxDiv>
    </HeaderDiv>
  );
};