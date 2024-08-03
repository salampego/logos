import { AddToOrder } from "entities/addToOrder/addToOrder";
import { BasketCard } from "features/basket/basketCard";

export const Basket = () => {
  return (
    <>
      <BasketCard />
      <AddToOrder />
    </>
  );
};
