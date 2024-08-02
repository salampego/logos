import { Hero } from "entities/hero/hero";
import { Map } from "widgets/map/map";
import { OurCafe } from "entities/ourCafe/ourCafe";
import { useGetProductsQuery } from "entities/products/module/products/productsOperation";
import { Products } from "entities/products/products";

export const HomePage = () => {
  const { isLoading, isError } = useGetProductsQuery();

  if (isError) {
    <h1>Error: {isError}</h1>;
  }

  return isLoading ? (
    <h1>Loading...</h1>
  ) : (
    <>
      <Hero />
      <Products />
      <OurCafe />
      <Map />
    </>
  );
};
