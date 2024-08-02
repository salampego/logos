import { useEffect, useState } from "react";

import { productsState } from "entities/products/types/types";
import { useGetProductsQuery } from "./module/products/productsOperation";
import { ProductsItem } from "./productsItem";

export const ProductsList = () => {
  const [products, setProducts] = useState<productsState[]>([]);
  const { data } = useGetProductsQuery();
  
  useEffect(() => {
    if (data) {
      setProducts(data);
    }
  }, [data]);

  return (
    <div>
      {products.map(({ id, productType, products }) => {
        return (
          <div
            id={id.toString()}
            className="py-12 border-solid border-b-2 border-b-text border-opacity-5"
            key={id}
          >
            <div className="my-10">
              <p className="font-GilroySemibold pl-5  text-2xl relative before:content-[''] before:h-[100%] before:w-1 before:bg-secondary before:absolute before:left-0">
                {productType}
              </p>

              <ProductsItem products={products} productsId={id} />
            </div>
          </div>
        );
      })}
    </div>
  );
};
