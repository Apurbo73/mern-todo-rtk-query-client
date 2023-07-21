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
      {allTodos && allTodos.map(t => <AlTodos t={t} />)}
    </div>
  );
}

export default App;
