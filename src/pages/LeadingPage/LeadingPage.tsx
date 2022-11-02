import React from 'react';
import { Footer } from 'components/footer';
import { Header } from 'components/header';
import { Products } from 'components/products';

export const LeadingPage: React.FC = () => {
  return (
    <div>
      <Header/>
      <Products/>
      <Footer/>
    </div>
  );
};
