import React from "react";
import { ButtonPurchase, CartDiv, InColumn, InLine, PurchaseValue, TextCart, Title, ValueCart} from "./Cart.style";
import { ProductInCart } from "components/ProductInCart";

export const Cart: React.FC = () => {
  return (
      <CartDiv>
        <Title>Seus pedidos</Title>
        <InColumn>
          <ProductInCart/>
          <ProductInCart/>
          <ProductInCart/>
        </InColumn>
        <InColumn>
          <PurchaseValue>
            <InLine className="valueInformation">
            <InColumn className="spaceCart">
              <TextCart>Subtotal</TextCart> 
              <TextCart>Desconto</TextCart>
              <TextCart className="valueTotal">Total</TextCart>
            </InColumn>
            <InColumn className="spaceCart2">
              <ValueCart>R$0,00</ValueCart>
              <ValueCart>-R$0,00</ValueCart>
              <ValueCart className="valueTotal">R$0,00</ValueCart>
            </InColumn>
            </InLine>
          </PurchaseValue>
          <ButtonPurchase>
            Realizar compra
          </ButtonPurchase>
        </InColumn>
      </CartDiv>
  );
};