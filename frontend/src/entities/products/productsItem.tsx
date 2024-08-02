import { useKeenSlider } from "keen-slider/react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "shared/lib/store/redux";

import { product } from "entities/products/types/types";
import { Button } from "shared/button/button";
import { Icon } from "shared/IconSvg/iconSvg";
import { Link, useLocation } from "react-router-dom";
import {
  addProducts,
  decrementProducts,
} from "features/basket/module/basketSlice/basketSlice";
import { getBasketProducts } from "features/basket/module/selectors";

interface IProductsItemProps {
  products: product[];
  productsId: number;
}

export const ProductsItem = ({ products, productsId }: IProductsItemProps) => {
  const basketProducts = useSelector(getBasketProducts);
  const [ref] = useKeenSlider<HTMLUListElement>({
    mode: "free",
    slides: {
      perView: 3.5,
    },
    breakpoints: {
      "(max-width: 768px)": {
        slides: { perView: 1.5 },
      },
    },
  });
  const dispatch = useAppDispatch();
  const location = useLocation();

  return (
    <ul
      className="keen-slider flex mt-12 overflow-hidden"
      ref={ref}
      id={productsId.toString()}
    >
      {products.map(({ id, ingredients, productName, weight, price }) => {
        const findBasketProducts = basketProducts.find(
          (item) => item.id === id
        );

        console.log(findBasketProducts);
        return (
          <li
            key={id}
            className="keen-slider__slide bg-[#4D4847] rounded-lg mr-5 min-w-96 relative"
          >
            <Link to={`/${id}`} state={{ from: location?.state?.from ?? "/" }}>
              <img
                src="src/assets/images/noImage.jpg"
                className="w-full h-auto"
                alt={productName}
              />
            </Link>
            <div className="sm:p-2 p-5 flex flex-col ">
              <div className="flex justify-between items-end">
                <p className="font-GilroySemibold text-xl">{productName}</p>
                <p className="font-GilroyRegular text-xs">weight: {weight}</p>
              </div>
              <div className="mt-2 mb-4">
                <p className="font-GilroyRegular text-xs">{ingredients}</p>
              </div>

              {findBasketProducts && findBasketProducts?.quantity >= 0 ? (
                <div className="flex justify-between items-center">
                  <Button
                    type="button"
                    classname="p-4 rounded-lg w-16"
                    onClick={() => dispatch(decrementProducts({ id, price }))}
                  >
                    <Icon name="minus" className="w-4 h-4" />
                  </Button>
                  <p className="font-GilroySemibold text-xl">
                    {findBasketProducts?.totalProductPrice}
                  </p>
                  <Button
                    type="button"
                    classname="p-4 rounded-lg w-16"
                    onClick={() =>
                      dispatch(
                        addProducts({ id, productName, ingredients, price })
                      )
                    }
                  >
                    <Icon name="plus" className="w-4 h-4" />
                  </Button>
                </div>
              ) : (
                <div className="flex justify-between items-center">
                  <p className=" text-xl font-GilroySemibold">
                    Price: {price}$
                  </p>
                  <Button
                    type="button"
                    classname="p-4 min-h-11 flex justify-center items-center"
                    onClick={() =>
                      dispatch(
                        addProducts({ id, productName, ingredients, price })
                      )
                    }
                  >
                    <p className="mr-3">Basket</p>
                    <Icon name="basket" className="w-[24px] h-[24px]" />
                  </Button>
                </div>
              )}
            </div>
            {findBasketProducts && findBasketProducts?.quantity >= 0 && (
              <span className="absolute bg-secondary right-2 top-1   rounded-full p-4 min-w-12 text-center">
                {findBasketProducts?.quantity}
              </span>
            )}
          </li>
        );
      })}
    </ul>
  );
};
