import { useSelector } from "react-redux";
import { getBasketProducts, getTotalQuantity } from "./module/selectors";
import { HashLink } from "react-router-hash-link";
import { Icon } from "shared/IconSvg/iconSvg";
import { BasketCardItem } from "./basketCardItem";

export const BasketCard = () => {
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
        <BasketCardItem basketProducts={basketProducts} />
      </div>
    </section>
  );
};
