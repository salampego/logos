import { useGetProductsQuery } from "entities/products/module/products/productsOperation";
import { useEffect, useState } from "react";

import { useAppDispatch } from "shared/lib/store/redux";
import { addProducts } from "features/basket/module/basketSlice/basketSlice";
import { product } from "entities/products/types/types";
import { Icon } from "shared/IconSvg/iconSvg";
import { Button } from "shared/button/button";
import { useSelector } from "react-redux";
import {
  getBasketProducts,
  getTotalPrice,
} from "features/basket/module/selectors";
import { Link } from "react-router-dom";
import { useKeenSlider } from "keen-slider/react";

export const AddToOrder = () => {
  const [addOrder, setAddOrder] = useState<product[]>([]);
  const { data } = useGetProductsQuery();

  const [ref, internalSlider] = useKeenSlider<HTMLUListElement>({
    mode: "free",
    slides: {
      perView: 4,
    },
    breakpoints: {
      "(max-width: 768px)": {
        disabled: true,
      },
    },
  });

  const totalPrice = useSelector(getTotalPrice);
  const basketProducts = useSelector(getBasketProducts);
  const dispatch = useAppDispatch();

  useEffect(() => {
    internalSlider?.current?.update();
  }, [internalSlider]);

  useEffect(() => {
    if (data) {
      const basketProductIds = basketProducts.map((product) => product.id);

      const availableProducts = data
        .flatMap((item) => item.products)
        .filter((product) => !basketProductIds.includes(product.id));

      const getRandomProduct = availableProducts
        .sort(() => 0.5 - Math.random())
        .slice(0, 4);
      setAddOrder(getRandomProduct);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  return (
    <section className="container py-20">
      <p className="font-GilroySemibold text-2xl mb-7">Add to order</p>
      <ul
        className="flex sm:flex-col justify-center bg-searchColor rounded-xl keen-slider"
        ref={ref}
      >
        {addOrder.map(({ id, productName, ingredients, price }) => {
          return (
            <li
              key={id}
              className="keen-slider__slide p-5 flex xl:flex-col justify-center items-center sm:border-b sm: border-r-0 last:border-0 border-opacity-10 border-text xl:border-b-0 xl:border-r border-solid"
            >
              <img
                src="noImage.jpg"
                alt=""
                className="xl:w-52 sm:w-20    rounded-xl mb-2"
              />

              <div className="sm:ml-5">
                <p className="font-GilroySemibold text-lg w-44">
                  {productName}
                </p>
                <div className="flex items-center">
                  <p className="font-GilroyRegular text-xs text-[#C6CED1] mr-5">
                    Add
                    <Button
                      type="button"
                      classname="p-2 rounded-full ml-1"
                      onClick={() =>
                        dispatch(
                          addProducts({ id, productName, ingredients, price })
                        )
                      }
                    >
                      <Icon name="plus" className="w-4 h-4" />
                    </Button>
                  </p>
                  <p className="font-GilroySemibold text-xs">{price} $</p>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
      <div className="bg-searchColor p-5 mt-5 rounded-xl flex xl:justify-center justify-between  items-center sm:flex-col ">
        <div className="flex mr-5 items-center sm:mb-3">
          <p className="mr-2">Total price:</p>
          <p className="font-GilroySemibold text-xl"> {totalPrice} $</p>
        </div>
        <Link
          to="/"
          className="bg-secondary rounded-xl hover:opacity-60 transition-opacity px-4 justify-center items-center p-4"
        >
          Place an order
        </Link>
      </div>
    </section>
  );
};
