import { ProductsType } from "entities/products/productsType";
import { ProductCard } from "features/productCard/productCard";
import { RecommendedList } from "features/productCard/recommended/recommendedList";
import { useParams } from "react-router-dom";

export const ProductDetail = () => {
  const { productsId } = useParams();
  return (
    <>
      <ProductsType />
      <ProductCard id={Number(productsId)} />
      <RecommendedList />
    </>
  );
};
