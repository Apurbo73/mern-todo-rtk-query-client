import React from "react";
import DetailPage from "./DetailPage";
import { useGetSingleTodoQuery } from "../../features/apiSlice";
import { useParams } from "react-router-dom";

const Detail = () => {
  const {id}=useParams();
  const {
    data: singleTodo,
    isLoading,
    isError,
    error
  } = useGetSingleTodoQuery(id);
  console.log(singleTodo);
  return (
    <div>
      {singleTodo && <DetailPage singleTodo={singleTodo} />}
    </div>
  );
};

export default Detail;
