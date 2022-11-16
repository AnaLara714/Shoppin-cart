import React from "react";
import { ShoppingCartRoutes } from "components/constants";
import { ItemCartContext } from "contexts/itemCart";
import { useLocation, useNavigate } from "react-router-dom";
import { ProductInfo } from "service/interfaces";
import { Description, DescriptionDiv, InColumn, Title, Price, AddCart, Text } from "./productDescription.style";

export const ProductDescription: React.FC = () => {
  const [product, setProduct] = React.useState<ProductInfo | undefined >(
    {} as ProductInfo,
  );
  const {getProduct, addCart} = React.useContext(ItemCartContext);
  const navigate = useNavigate();
  const location = useLocation();
  
  const onAddCartButtonClick = () => {
    if (product) addCart(product);
    navigate(ShoppingCartRoutes.cart);
  };
  
  React.useEffect(() => {
    const productID = Number(location.pathname.split("/").reverse()[0]);
    const produc = getProduct(productID);
    if(!produc) navigate(ShoppingCartRoutes.product);
    setProduct(produc);
  }, [getProduct, location, navigate]);
  return (
    <DescriptionDiv>
      <Title>{product?.title}</Title>
      <InColumn>
        <img
          src={product?.image}
          alt={product?.title}
          className={"imgProduct"}
        />
      </InColumn>
      <InColumn>
        <Description>{product?.description}</Description>
        <Text>Avaliação: {product?.rating?.rate}</Text>
        <Price>U$ {product?.price}</Price>
        <Text>Não perca! Compre AGORA! </Text>
        <AddCart
          onClick={onAddCartButtonClick}
        >
          Adicionar ao carrinho
        </AddCart>
      </InColumn>
    </DescriptionDiv>
  );
};