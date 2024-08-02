import { ProductsList } from "./productsList";
import { ProductsType } from "./productsType";

export const Products = () => {
  return (
    <>
      <ProductsType />
      <section className="container">
        <ProductsList />
      </section>
    </>
  );
};
