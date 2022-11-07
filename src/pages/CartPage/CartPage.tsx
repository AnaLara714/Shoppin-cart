import { Cart } from 'components/MainCart';
import { Footer } from 'components/footer';
import { Header } from 'components/header';
import React from 'react';

export const CartPage: React.FC = () => {
  return (
    <React.Fragment>
      <Header/>
      <Cart/>
      <Footer/>
    </React.Fragment>
  )
}