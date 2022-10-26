import React from "react";
import Logo from "assets/imgs/LogoCompleta.svg"; 
import IconCarrinho from "assets/icons/carrinho.svg";
import fotoUsuario from "assets/imgs/fotoUsuario.svg";
import {NumberCart, TextHeader, HeaderDiv, BoxDiv} from "./header.style"; 

export const Header: React.FC = () => {
  return (
    <HeaderDiv>
      <BoxDiv>
        <img src={Logo} alt={"Logo"} className="ImgLogo"/>
      </BoxDiv>
      <BoxDiv>
        <BoxDiv className="OptionsHeader">
          <TextHeader>INICIO</TextHeader>
          <TextHeader className="product">PRODUTOS</TextHeader>
          <TextHeader>CONTATO</TextHeader>
        </BoxDiv>
        <img 
          src={IconCarrinho} 
          alt={"icone do carrinho"} 
          className={"cart"}
        />
        <NumberCart>15</NumberCart>
          <img className={"photoUser"} src={fotoUsuario} alt={"foto do usuario"}/>
      </BoxDiv>
    </HeaderDiv>
  );
};