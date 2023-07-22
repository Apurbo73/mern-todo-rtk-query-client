import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useUpdateTodoMutation } from "../../features/apiSlice";

const UpdateForm = ({ singleTodo }) => {
  const [updateTodo, { isLoading, isError, error }] = useUpdateTodoMutation();
  const { data: initialTodo } = singleTodo;
  const { id } = useParams();
  const [todo, setTodo] = useState(initialTodo);
  //handle Submit:
  const handleSubmit = e => {
    e.preventDefault();
    console.log(todo);
    updateTodo({ id,  data:{todo} });  
  };
  return (
    <div>
      <div>
        <div className="col-lg-3 col-md-4 mx-auto">
          <div className="card-body m-3 bg-warning rounded">
            <h5 className="text-center">Update Todo</h5>
            <form action="" onSubmit={handleSubmit}>
              <div className=" mb-2 mt-2 m-2 ">
                <input
                  type="text"
                  value={todo}
                  onChange={e => {
                    setTodo(e.target.value);
                  }}
                />
              </div>
              <br />
              <input type="submit" className="btn btn-dark m-2 w-75" />
            </form>
            <div className="d-flex ">
              <Link to="/" className="btn btn-dark m-2 w-100">
                home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateForm;
