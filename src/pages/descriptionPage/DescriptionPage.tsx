import { Footer } from "components/footer";
import { Header } from "components/header";
import { ProductDescription } from "components/productDescription";
import React  from "react";

export const DescriptionPage: React.FC = () => {
  return (
    <React.Fragment>
      <Header/>
      <ProductDescription/>
      <Footer/>
    </React.Fragment>
  );
};