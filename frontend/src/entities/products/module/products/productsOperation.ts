import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { productsState } from "entities/products/types/types";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL }),
  endpoints: (builder) => ({
    getProducts: builder.query<productsState[], void>({
      query: () => "products",
    }),
  }),
});

export const { useGetProductsQuery } = productsApi;
