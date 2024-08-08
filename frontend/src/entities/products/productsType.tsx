import "keen-slider/keen-slider.min.css";
import { useEffect, useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import { HashLink } from "react-router-hash-link";
import clsx from "clsx";
import { useGetProductsQuery } from "./module/products/productsOperation";

import { useScrollspy } from "shared/lib/scrollSpy/useScrollSpy";
import { useSelector } from "react-redux";
import { getBasketProducts } from "features/basket/module/selectors";

interface IState {
  productType: string;
  id: number;
}

interface IProductsData {
  data: IState[];
}

export const ProductsType = () => {
  const [productsType, setProductsType] = useState<IState[]>([]);
  const [productsId, setProductsId] = useState<string[]>([]);
  const products = useSelector(getBasketProducts);

  const activeId = useScrollspy(productsId, 88);

  const { data } = useGetProductsQuery<IProductsData>();

  useEffect(() => {
    if (data) {
      const getProductsType = data.map(({ productType, id }: IState) => {
        return { productType, id };
      });
      const getProductsId = data.map(({ id }) => id.toString());
      setProductsType(getProductsType);
      setProductsId(getProductsId);
    }
  }, [data, products]);

  const [ref] = useKeenSlider<HTMLUListElement>({
    mode: "free",
    slides: { perView: 3 },
    breakpoints: {
      "(max-width: 768px)": {
        slides: { perView: 3 },
      },
      "(min-width: 768px)": {
        slides: { perView: 6.5 },
      },
    },
  });
  return (
    <section className="container bg-primary border-solid border-b-2 border-b-text border-opacity-5 sticky tl:top-0 lg:top-[93px] z-40 overflow-hidden ">
      <nav>
        <ul ref={ref} className="keen-slider">
          {productsType.map(({ id, productType }) => {
            return (
              <HashLink
                to={`/#${id.toString()}`}
                className="keen-slider__slide flex justify-center"
                key={id}
              >
                <li
                  className={clsx(
                    "py-5 relative",
                    id.toString() === activeId &&
                      "after:content-[''] after:w-[100%] after:h-1 after:bg-secondary after:absolute after:rounded-lg after:bottom-0"
                  )}
                >
                  <p className=" font-GilroyRegular flex justify-center ">
                    {productType}
                  </p>
                </li>
              </HashLink>
            );
          })}
        </ul>
      </nav>
    </section>
  );
};
