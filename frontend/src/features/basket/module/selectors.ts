import { basket } from "./types/types";

interface RootState {
  basket: basket;
}

export const getTotalQuantity = (state: RootState) =>
  state.basket.totalQuantity;
export const getTotalPrice = (state: RootState) => state.basket.totalPrice;
export const getBasketProducts = (state: RootState) => state.basket.products;
