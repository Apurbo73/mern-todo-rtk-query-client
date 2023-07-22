import React from "react";
import { Link } from "react-router-dom";
import { useDeleteTodoMutation } from "../../features/apiSlice";

const DetailPage = ({ singleTodo }) => {
  const [deleteTodo, { isLoading, error }] = useDeleteTodoMutation();
  const handleDelete = () => {
    deleteTodo(singleTodo._id);
  };
  return (
    <div>
      <div className="col-lg-3 col-md-4 mx-auto">
        <div className="card-body m-3 bg-warning rounded">
          <div className=" mb-2 mt-2 m-2 ">
            <h6>
              {singleTodo.data}
            </h6>
            <h6>
              Id :{singleTodo._id}
            </h6>
          </div>
          <br />
          <div className="d-flex ">
            <Link
              to={`/detail/update/${singleTodo._id}`}
              className="btn btn-success m-2 w-50"
            >
              Edit
            </Link>
            <br />
            <Link to='/' className="btn btn-danger m-2 w-50" onClick={handleDelete}>
              Delete
            </Link>
            <Link to="/" className="btn btn-dark m-2 w-50">
              home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
