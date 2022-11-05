import { Cart } from 'components/MainCart';
import { Footer } from 'components/footer';
import { Header } from 'components/header';
import React from 'react';

export const CartPage: React.FC = () => {
  return (
    <div>
      <Header/>
      <Cart/>
      <Footer/>
    </div>
  )
}