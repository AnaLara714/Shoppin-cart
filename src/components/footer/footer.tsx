import React from "react";
import Logo from "assets/imgs/LogoCompleta.svg";
import { FooterDiv, ImgLogo } from "./footer.style";

export const Footer: React.FC = () => {
  return (
    <FooterDiv>
      <ImgLogo>
          <img src={Logo} alt={"Logo"}/>
      </ImgLogo>
    </FooterDiv>
)};