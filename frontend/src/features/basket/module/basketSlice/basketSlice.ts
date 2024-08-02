import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { basket, PayloadAddProduct, productsBasket } from "../types/types";

const initialState: basket = {
  products: [],
  totalQuantity: 0,
  totalPrice: 0,
};

const calculateTotalQuantity = (products: productsBasket[]) => {
  return products.reduce((total, product) => total + product.quantity, 1);
};

const calculateTotalPrice = (products: productsBasket[]) => {
  return products.reduce(
    (total, product) => total + product.totalProductPrice,
    0
  );
};

const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addProducts(state, actions: PayloadAction<PayloadAddProduct>) {
      const productIndex = state.products.findIndex(
        ({ id }) => id === actions.payload.id
      );

      if (productIndex === -1) {
        state.products.push({
          ...actions.payload,
          quantity: 1,
          totalProductPrice: actions.payload.price,
        });
      } else {
        state.products[productIndex].quantity += 1;
        state.products[productIndex].totalProductPrice += actions.payload.price;
      }
      state.totalQuantity = calculateTotalQuantity(state.products);
      state.totalPrice = calculateTotalPrice(state.products);
    },
    decrementProducts(
      state,
      actions: PayloadAction<Pick<PayloadAddProduct, "id" | "price">>
    ) {
      const productIndex = state.products.findIndex(
        ({ id }) => id === actions.payload.id
      );
      if (productIndex === -1) {
        return;
      } else if (state.products[productIndex].quantity > 1) {
        state.products[productIndex].quantity -= 1;
        state.products[productIndex].totalProductPrice -= actions.payload.price;
      } else {
        state.products.splice(productIndex, 1);
      }
      state.totalQuantity = calculateTotalQuantity(state.products);
      state.totalPrice = calculateTotalPrice(state.products);
    },
    deleteProducts(
      state,
      actions: PayloadAction<Pick<PayloadAddProduct, "id">>
    ) {
      state.products = state.products.filter(
        ({ id }) => id !== actions.payload.id
      );
      state.totalQuantity = calculateTotalQuantity(state.products);
      state.totalPrice = calculateTotalPrice(state.products);
    },
  },
});

export const { addProducts, decrementProducts, deleteProducts } =
  basketSlice.actions;
export const basketReducer = basketSlice.reducer;
