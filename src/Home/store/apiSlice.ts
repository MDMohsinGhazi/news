import { apiSlice } from '../../store/apiSlice';
import { Article, RootWeather } from '../../types';

export const newsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getheadlines: builder.query<Article[], any>({
      query: () => '/news/headlines',
    }),
    getTodayNews: builder.query<Article[], { count: number }>({
      query: ({ count }) => `/news/today?count=${count}`,
    }),
    getByCategory: builder.query<
      Article[],
      { category: string; count: number }
    >({
      query: ({ category, count }) =>
        `/news/category/${category}?count=${count}`,
    }),
    getBysources: builder.query<Article[], { sources: string; count: number }>({
      query: ({ sources, count }) =>
        `/news/sources?sources=${sources}&count=${count}`,
    }),
  }),
});

export const {
  useGetheadlinesQuery,
  useGetByCategoryQuery,
  useGetBysourcesQuery,
  useGetTodayNewsQuery,
} = newsApiSlice;

export const weatherApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getWeather: builder.query<
      RootWeather,
      { longitude: number | null; latitude: number | null }
    >({
      query: ({ latitude, longitude }) =>
        `/weather?latitude=${latitude}&longitude=${longitude}`,
    }),
  }),
});

export const { useGetWeatherQuery } = weatherApiSlice;
