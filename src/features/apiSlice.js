import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8080"
  }),
  tagTypes: ["add"],
  endpoints: builder => ({
    addTodo: builder.mutation({
      query: data => ({
        url: `/todos`,
        method: "POST",
        body: data
      }),
      invalidatesTags: ["add"]
    }),
    getAllTodos: builder.query({
      query: () => "/todos",
      providesTags: ["add"]
    }),
    getSingleTodo: builder.query({
      query: id => `/todos/${id}`
    }),
    updateTodo:builder.mutation({
      query:({id,data})=>(
        
        {
          url:`/todos/${id}`,
          method:"PUT",
          body:data
        }
      )
    })
  })
});
export const {
  useAddTodoMutation,
  useGetAllTodosQuery,
  useGetSingleTodoQuery,
  useUpdateTodoMutation
} = apiSlice;
