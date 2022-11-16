import React from "react";
import { ButtonAmount, InColumn, InLine, Name, Price, Product, Quantity } from "./productInCart.style";
import { ProductCartInfo } from "service/interfaces";
import { useNavigate } from "react-router-dom";
import { ItemCartContext } from "contexts/itemCart";
import Trash from "assets/icons/trash-can.png";

export const ProductInCart: React.FC<ProductCartInfo> = ({
  id,
  title,
  image,
  price,
  count,
}) => {
  const navigate = useNavigate();
  const {decrementCountCart, incrementCountCart, removeItemCart} = React.useContext(ItemCartContext);

  const onProductItemClick = () => 
    navigate(`/product/${id}`);
  const onLessButtonClick = () => 
    decrementCountCart(id);
  const onMoreButtonClick = () => 
    incrementCountCart(id);
  const onRemoveButtonClick = () => 
    removeItemCart(id);

  return (
      <div>
          <Product>
            <InLine>
              <InColumn>
                <img 
                  src={image} 
                  alt={title}
                  className={"imgProduct"}
                  onClick={onProductItemClick}
                />
              </InColumn>
              <InColumn>
                <Name onClick={onProductItemClick}>{`${title.slice(0, 25)}...`}</Name>
                <InLine >
                  <Quantity>{count} UND. de</Quantity> 
                  <Price className="priceUND">U${(price).toFixed(2)}</Price>
                  <img
                    src={Trash}
                    alt={"Delete"}
                    className={"Trash"}
                    onClick={onRemoveButtonClick}
                  />
                  <ButtonAmount 
                    onClick={onLessButtonClick} 
                    className="LessAmount">-
                  </ButtonAmount>
                  <ButtonAmount 
                    onClick={onMoreButtonClick}
                    className={"MoreAmount"}>+
                  </ButtonAmount>
                </InLine>
                <Price>U$ {(count*price).toFixed(2)}</Price>
              </InColumn>
            </InLine>
          </Product>
        </div>
  );
};