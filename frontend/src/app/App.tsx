import { Route, Routes } from "react-router-dom";
import "keen-slider/keen-slider.min.css";

import { Layout } from "app/layout/layout";
import { HomePage } from "pages/HomePage";
import { ProductDetail } from "pages/ProductDetail";
import { Basket } from "pages/Basket";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/:productsId" element={<ProductDetail />} />
        <Route path="basket" element={<Basket />} />
      </Route>
    </Routes>
  );
};
