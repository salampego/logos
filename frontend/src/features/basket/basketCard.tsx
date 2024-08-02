import { useSelector } from "react-redux";
import { getBasketProducts } from "./module/selectors";

export const BasketCard = () => {
  const products = useSelector(getBasketProducts);
  console.log(products);
  return <section className="container"></section>;
};
