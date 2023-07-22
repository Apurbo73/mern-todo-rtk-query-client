import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8080"
  }),
  tagTypes: ["all", "singleTodo"],
  endpoints: builder => ({
    addTodo: builder.mutation({
      query: data => ({
        url: `/todos`,
        method: "POST",
        body: data
      }),
      invalidatesTags: ["all"]
    }),
    getAllTodos: builder.query({
      query: () => "/todos",
      providesTags: ["all"]
    }),
    getSingleTodo: builder.query({
      query: id => `/todos/${id}`,
      providesTags: ["singleTodo"]
    }),
    updateTodo: builder.mutation({
      query: ({ id, data }) => ({
        url: `/todos/${id}`,
        method: "PUT",
        body: data
      }),
      invalidatesTags: ["all", "singleTodo"]
    }),
    deleteTodo: builder.mutation({
      query: id => ({
        url: `/todos/${id}`,
        method: "DELETE"
      }),
      invalidatesTags: ["all", "singleTodo"]

    })
  })
});
export const {
  useAddTodoMutation,
  useGetAllTodosQuery,
  useGetSingleTodoQuery,
  useUpdateTodoMutation,
  useDeleteTodoMutation
} = apiSlice;
