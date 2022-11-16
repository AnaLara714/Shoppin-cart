import React from "react";
import Logo from "assets/imgs/LogoCompleta.svg";
import { FooterDiv } from "./footer.style";

export const Footer: React.FC = () => 
    <FooterDiv>
      <img src={Logo} alt={"Logo"} className="ImgLogo"/>
    </FooterDiv>