import { apiSlice } from "../../store/apiSlice";
import { Article } from "../../types";

export const categoryApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getByCategory: builder.query<Article[], { category: string; count: number }>({
      query: ({ category, count }) => `/news/category/${category}&count=${count}`,
    }),
  }),
});

export const { useGetByCategoryQuery } = categoryApiSlice;
