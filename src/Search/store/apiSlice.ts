import { apiSlice } from "../../store/apiSlice";
import { Article } from "../../types";

export const searchApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getByQ: builder.query<Article[], { q: string; count: number }>({
      query: ({ q, count }) => `/news/search?q=${q}&count=${count}`,
    }),
  }),
});

export const { useGetByQQuery } = searchApiSlice;
