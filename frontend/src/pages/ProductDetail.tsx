import { ProductsType } from "entities/products/productsType";
import { ProductCard } from "features/productCard/productCard";
import { RecommendedList } from "features/productCard/recommended/recommendedList";
import { useParams } from "react-router-dom";

export const ProductDetail = () => {
  const { productsId } = useParams();

  console.log(productsId);

  return (
    <>
      <ProductsType />
      <ProductCard id={Number(productsId)} />
      <RecommendedList />
    </>
  );
};
