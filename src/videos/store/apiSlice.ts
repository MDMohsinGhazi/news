import { apiSlice } from "../../store/apiSlice";
import { Videos } from "../../types";

export const categoryApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getVideos: builder.query<Videos, { count: number }>({
      query: ({ count }) => `/videos?${count}`,
    }),
  }),
});

export const { useGetVideosQuery } = categoryApiSlice;
