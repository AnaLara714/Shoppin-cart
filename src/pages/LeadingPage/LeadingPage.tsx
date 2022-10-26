import React from 'react';
import { Footer } from 'components/footer';
import { Header } from 'components/header';
import { Product } from 'components/Product';

export const LeadingPage: React.FC = () => {
  return (
    <div>
      <Header/>
      <Product/>
      <Footer/>
    </div>
  );
};
