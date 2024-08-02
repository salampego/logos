import { useEffect, useState } from "react";
import { useGetProductsQuery } from "entities/products/module/products/productsOperation";

import { product } from "entities/products/types/types";
import { RecommendedItem } from "./recommendedItem";
import { Map } from "widgets/map/map";

export const RecommendedList = () => {
  const [recommended, setRecommended] = useState<product[]>([]);
  const { data } = useGetProductsQuery();

  useEffect(() => {
    if (data) {
      const getRecommendedProduct = data
        .flatMap((item) => item.products)
        .sort(() => 0.5 - Math.random())
        .slice(0, 6);
      setRecommended(getRecommendedProduct);
    }
  }, [data]);

  return (
    <section className="container py-12 border-solid border-b-2 border-b-text border-opacity-5">
      <div className="my-10">
        <p className="font-GilroySemibold pl-5  text-2xl relative before:content-[''] before:h-[100%] before:w-1 before:bg-secondary before:absolute before:left-0">
          Frequently Bought With This Item
        </p>
      </div>
      <RecommendedItem recommended={recommended} />
      <Map />
    </section>
  );
};
