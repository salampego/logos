import { useSelector } from "react-redux";
import { getBasketProducts, getTotalQuantity } from "./module/selectors";
import { HashLink } from "react-router-hash-link";
import { Icon } from "shared/IconSvg/iconSvg";
import { Button } from "shared/button/button";
import {
  addProducts,
  decrementProducts,
  deleteProducts,
} from "./module/basketSlice/basketSlice";
import { useAppDispatch } from "shared/lib/store/redux";
export const BasketCard = () => {
  const dispatch = useAppDispatch();
  const basketProducts = useSelector(getBasketProducts);
  const totalQuantity = useSelector(getTotalQuantity);

  return (
    <section className="container pt-20">
      <div>
        <HashLink to="/#1" className="flex">
          <Icon name="arrow" className="w-5 h-5" />
          <p className="ml-2">for dish selection</p>
        </HashLink>
        <div className="my-10 flex items-center">
          <p className="mr-5 font-GilroySemibold pl-5 text-2xl relative before:content-[''] before:h-[100%] before:w-1 before:bg-secondary before:absolute before:left-0">
            Basket
          </p>
          <p className="text-secondary">
            ({totalQuantity > 0 ? totalQuantity : 0} items in cart)
          </p>
        </div>
        <ul className="rounded-xl overflow-hidden flex flex-col">
          {basketProducts.map(
            ({
              productName,
              ingredients,
              id,
              price,
              quantity,
              totalProductPrice,
            }) => {
              return (
                <li
                  className="flex items-center justify-between last:border-0 border-opacity-5 border-text border-b border-solid bg-searchColor p-5"
                  key={id}
                >
                  <div className="flex items-center xl:basis-2/6">
                    <img
                      src="noImage.jpg"
                      alt={productName}
                      className="w-32 h-full"
                    />
                    <div className="ml-5 sm:ml-2 w-">
                      <p className="font-GilroySemibold text-lg sm:text-base">
                        {productName}
                      </p>
                      <p className="font-GilroyRegular text-xs text-[#A6A7AB] sm:hidden">
                        {ingredients}
                      </p>
                      <div className="xl:hidden flex">
                        <div className="flex justify-center items-center ">
                          <Button
                            type="button"
                            classname="p-1 rounded-full"
                            onClick={() =>
                              dispatch(decrementProducts({ id, price }))
                            }
                          >
                            <Icon name="minus" className="w-4 h-4" />
                          </Button>
                          <p className="font-GilroySemibold text-xs px-1">
                            {quantity}
                          </p>
                          <Button
                            type="button"
                            classname="p-1 rounded-full"
                            onClick={() =>
                              dispatch(
                                addProducts({
                                  id,
                                  productName,
                                  ingredients,
                                  price,
                                })
                              )
                            }
                          >
                            <Icon name="plus" className="w-4 h-4" />
                          </Button>
                        </div>

                        <div className="flex items-center ">
                          <p className="font-GilroySemibold text-xs text-right totalProductPrice pl-2">
                            {totalProductPrice} $
                          </p>
                          <Button
                            type="button"
                            classname="p-1 rounded-full ml-1"
                            onClick={() => dispatch(deleteProducts({ id }))}
                          >
                            <Icon name="dagger" className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center items-center w-32 basis-2/6 sm:hidden">
                    <Button
                      type="button"
                      classname="p-3 rounded-full"
                      onClick={() => dispatch(decrementProducts({ id, price }))}
                    >
                      <Icon name="minus" className="w-4 h-4" />
                    </Button>
                    <p className="font-GilroySemibold text-xl px-2">
                      {quantity}
                    </p>
                    <Button
                      type="button"
                      classname="p-3 rounded-full"
                      onClick={() =>
                        dispatch(
                          addProducts({ id, productName, ingredients, price })
                        )
                      }
                    >
                      <Icon name="plus" className="w-4 h-4" />
                    </Button>
                  </div>
                  <div className="flex items-center justify-end sm:hidden basis-2/6">
                    <p className="font-GilroySemibold text-xl text-right totalProductPrice px-10">
                      {totalProductPrice} ₽
                    </p>
                    <Button
                      type="button"
                      classname="p-3 rounded-full ml-5"
                      onClick={() => dispatch(deleteProducts({ id }))}
                    >
                      <Icon name="dagger" className="w-4 h-4" />
                    </Button>
                  </div>
                </li>
              );
            }
          )}
        </ul>
      </div>
    </section>
  );
};
