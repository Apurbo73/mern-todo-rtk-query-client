import React from 'react';
import './App.css';
import Form from './component/Form';
import { useGetAllTodosQuery } from './features/apiSlice';

function App() {
  const {data:allTodos,isLoading, isError}=useGetAllTodosQuery();

  return (
    <div className="App">
      <Form></Form>
      {
        allTodos && allTodos.map((t)=>{
          return <h1>{t.todo}</h1>
        })
      }
    </div>
  );
}

export default App;
