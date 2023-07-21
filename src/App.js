import React from "react";
import "./App.css";
import Form from "./component/Form";
import { useGetAllTodosQuery } from "./features/apiSlice";
import AlTodos from "./component/AlTodos";

function App() {
  const { data: allTodos, isLoading, isError } = useGetAllTodosQuery();

  return (
    <div className="App">
      <Form />
      <h6 className="mt-3 mb-2">All Your Todos</h6>
      <div className="d-flex flex-wrap row">
      {allTodos && allTodos.map(t => <AlTodos t={t} />)}

      </div>
    </div>
  );
}

export default App;
