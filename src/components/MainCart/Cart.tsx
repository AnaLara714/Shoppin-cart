import React from "react";
import { ButtonPurchase, CartDiv, InColumn, InLine, PurchaseValue, TextCart, Title, ValueCart} from "./Cart.style";
import { ProductInCart } from "components/ProductInCart";
import { ItemCartContext } from "contexts/itemCart";


export const Cart: React.FC = () => {
  const { cart, getTotal } = React.useContext(ItemCartContext);
  const discount = () => 
    getTotal() !== 0 ? ((getTotal()/100)*5) : 0;
  const totalValue = () => 
    getTotal() !== 0 ? getTotal() - discount(): 0;
  
  return (
      <CartDiv>
        {getTotal() == 0 ? 
          <Title>Ainda não há pedidos aqui, clique em inicio, e boas compras! :)</Title>
         : <Title>Seus pedidos</Title> }
        <InColumn>
          {cart?.map(product => (
            <ProductInCart
              key={product.id}
              id={product.id}
              title={product.title}
              image={product.image}
              price={product.price}
              count={product.count}
            />
          ))}
        </InColumn>
        <InColumn>
          <PurchaseValue>
            <InLine className="valueInformation">
            <InColumn className="spaceCart">
              <TextCart>Subtotal</TextCart> 
              <TextCart>Frete</TextCart> 
              <TextCart>Desconto (5%)</TextCart>
              <TextCart className="valueTotal">Total</TextCart>
            </InColumn>
            <InColumn className="spaceCart2">
              <ValueCart>U$ {getTotal().toFixed(2)}</ValueCart>
              <ValueCart>U$ 0.00</ValueCart>
              <ValueCart>-U$ {discount().toFixed(2)}</ValueCart>
              <ValueCart className="valueTotal">U$ {totalValue().toFixed(2)}</ValueCart>
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