import React, {useState, useEffect} from 'react';
import { Footer } from 'components/footer';
import { Header } from 'components/header';
import { Products } from 'components/products';

export const LeadingPage: React.FC = () => {
  return (
    <React.Fragment>
      <Header/>
      <Products />
      <Footer/>
    </React.Fragment>
  );
};
