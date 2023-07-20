import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8080"
  }),
  endpoints: builder => ({
    addTodo: builder.mutation({
      query: data => ({
        url: `/todos`,
        method: "POST",
        body: data
      })
    })
  })
});
export const {useAddTodoMutation}=apiSlice;