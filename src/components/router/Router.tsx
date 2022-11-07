import { ShoppingCartRoutes } from "components/constants";
import { CartPage } from "pages/CartPage/CartPage";
import { DescriptionPage } from "pages/descriptionPage/DescriptionPage";
import { LeadingPage } from "pages/LeadingPage/LeadingPage";
import { Route, BrowserRouter, Routes } from "react-router-dom";

export const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={ShoppingCartRoutes.product}
          element={<LeadingPage/>}
        />
        <Route
          path={ShoppingCartRoutes.cart}
          element={<CartPage/>}
        />
        <Route
          path={ShoppingCartRoutes.decriptionProduct}
          element={<DescriptionPage/>}
        />
      </Routes>  
    </BrowserRouter>
  );
};