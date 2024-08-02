import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useGetProductsQuery } from "entities/products/module/products/productsOperation";

import { product } from "entities/products/types/types";
import { IProductCardProps } from "features/productCard/model/types/types";
import { Icon } from "shared/IconSvg/iconSvg";
import { Button } from "shared/button/button";
import { useAppDispatch } from "shared/lib/store/redux";
import { addProducts } from "features/basket/module/basketSlice/basketSlice";

export const ProductCard = ({ id }: IProductCardProps) => {
  const [product, setProduct] = useState<product | null>(null);
  const dispatch = useAppDispatch();

  const location = useLocation();
  const { data } = useGetProductsQuery();

  useEffect(() => {
    if (data) {
      const getProduct = data
        .flatMap((item) => item.products)
        .find((prod) => prod.id === id);

      setProduct(getProduct ? getProduct : null);
    }
  }, [data, id]);

  if (!product) {
    return null;
  }

  const {
    productName,
    ingredients,
    weight,
    price,
    proteins,
    fats,
    carbohydrates,
    calories,
  } = product;

  return (
    <section className="container">
      <div className="mt-5">
        <Link to={location.state?.from ?? "/"} className="flex items-center">
          <div className="p-2 bg-secondary rounded-full mr-2">
            <Icon name="arrow" className="w-6 h-6" />
          </div>
          Go back
        </Link>
        <div className="flex mt-5 rounded-lg bg-searchColor  lg:flex-col lg:items-center">
          <img
            src="src/assets/images/noImage.jpg"
            className="w-[600px]  lg:w-full"
          />

          <div className="p-5 lg:py-2 lg:px-1 bg-searchColor flex flex-col justify-between lg:justify-center lg:items-center">
            <div className="mb-20 lg:flex lg:flex-col lg:items-center">
              <p className="font-GilroySemibold text-2xl mt-5">{productName}</p>
              <p className="font-GilroyRegular text-textSecondary">
                {ingredients}
              </p>
            </div>
            <div className=" lg:flex lg:flex-col lg:items-center">
              <p className="font-GilroyRegular text-sm mb-5">
                Weight : {weight}
              </p>
              <div className="flex items-center lg:mb-5">
                <Button
                  type="button"
                  classname="py-2 px-4 flex items-center mr-3"
                  onClick={() =>
                    dispatch(
                      addProducts({ id, productName, ingredients, price })
                    )
                  }
                >
                  <p>Basket</p>
                  <span className=" w-px h-8 bg-text opacity-30  mx-3"></span>
                  <Icon name="shopping-bag" className="w-5 h-5" />
                </Button>
                <p className="font-GilroySemibold text-2xl">{price} $</p>
              </div>
            </div>
            <table className="min-w-full text-white ">
              <thead>
                <tr className=" border-solid border-b-2 border-b-text border-opacity-10 font-GilroyRegular text-xs">
                  <th className="tl:px-4 tl:py-3 p-1">Proteins</th>
                  <th className="tl:px-4 tl:py-3 p-1">Fats</th>
                  <th className="tl:px-4 tl:py-3 p-1">Carbohydrates</th>
                  <th className="tl:px-4 tl:py-3 p-1">Calories</th>
                  <th className="tl:px-4 tl:py-3p-1">Weight</th>
                </tr>
              </thead>
              <tbody>
                <tr className="font-GilroyRegular text-xs">
                  <td className="tl:px-4 tl:py-3 p-1 text-center">
                    {proteins}
                  </td>
                  <td className="tl:px-4 tl:py-3 p-1 text-center">{fats}</td>
                  <td className="tl:px-4 tl:py-3 p-1 text-center">
                    {carbohydrates}
                  </td>
                  <td className="tl:px-4tl:py-3 p-1 text-center">{calories}</td>
                  <td className="tl:px-4tl:py-3 p-1 text-center">{weight}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};