import React from "react";
import { Link } from "react-router-dom";

const DetailPage = ({singleTodo}) => {
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
            <Link to='/' className="btn btn-dark">
              Home
            </Link>
          </div>
          <br />
          <div className="d-flex ">
            <div className="btn btn-success m-2 w-50">Edit</div> <br />
            <div className="btn btn-danger m-2 w-50">Delete</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
