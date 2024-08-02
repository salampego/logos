import { configureStore } from "@reduxjs/toolkit";
import { productsApi } from "entities/products/module/products/productsOperation";
import { basketReducer } from "features/basket/module/basketSlice/basketSlice";

export const store = configureStore({
  reducer: {
    basket: basketReducer,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
