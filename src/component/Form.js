import React, { useState } from "react";
import { useAddTodoMutation } from "../features/apiSlice";
const Form = () => {
    
  const [todo, setTodo] = useState("");
  const [addTodo, {isLoaading,isError,isSuccess,Error}]= useAddTodoMutation();

  //handle Submit:
  const handleSubmit=(e)=>{
    e.preventDefault();
    addTodo({todo})
  }
  return (
    <div>
      <form className="w-25 mx-auto mt-5" onSubmit={handleSubmit}>
        <div className=" text-center mb-5">
          <h3>Mern Todo App</h3>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Enter Todo Title
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={e => {
              setTodo(e.target.value);
            }}
          />
        </div>

        <button type="submit" className="btn btn-primary w-100">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
