import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { Link, useLocation } from "react-router-dom";
import { IRecommendedItemProps } from "../model/types/types";
import { Button } from "shared/button/button";
import { Icon } from "shared/IconSvg/iconSvg";
import { useEffect } from "react";
import { useAppDispatch } from "shared/lib/store/redux";
import { addProducts } from "features/basket/module/basketSlice/basketSlice";

export const RecommendedItem = ({ recommended }: IRecommendedItemProps) => {
  const location = useLocation();
  const dispatch = useAppDispatch();

  const [ref, internalSlider] = useKeenSlider<HTMLUListElement>({
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

  useEffect(() => {
    internalSlider?.current?.update();
  }, [internalSlider, recommended]);

  return (
    <ul className="keen-slider flex my-12 overflow-hidden" ref={ref}>
      {recommended.map(({ id, productName, weight, ingredients, price }) => {
        return (
          <li
            key={id}
            className="keen-slider__slide  bg-[#4D4847] rounded-lg mr-5 min-w-96"
          >
            <Link to={`/${id}`} state={{ from: location?.state?.from ?? "/" }}>
              <img
                src="src/assets/images/noImage.jpg"
                className="w-full h-auto"
                alt={productName}
              />
            </Link>
            <div className="sm:p-2 p-5 ">
              <div className="flex justify-between items-end">
                <p className="font-GilroySemibold text-xl">{productName}</p>
                <p className="font-GilroyRegular text-xs">weight: {weight}</p>
              </div>
              <div className="mt-2 mb-4">
                <p className="font-GilroyRegular text-xs">{ingredients}</p>
              </div>
              <div className="flex justify-between items-center">
                <p className=" text-xl font-GilroySemibold">Price: {price}$</p>
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
            </div>
          </li>
        );
      })}
    </ul>
  );
};
