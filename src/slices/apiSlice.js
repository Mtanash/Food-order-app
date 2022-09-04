import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const mealApi = createApi({
  reducerPath: "mealApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://food-ordering-api-mtanash.herokuapp.com",
  }),
  endpoints: (builder) => ({
    getMeals: builder.query({
      query: () => "meals",
    }),
    getMealById: builder.query({
      query: (id) => `meals/${id}`,
    }),
  }),
});

export const { useGetMealByIdQuery, useGetMealsQuery } = mealApi;
