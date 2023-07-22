import React from "react";
import { Link } from "react-router-dom";

const AlTodos = ({ t }) => {
  return (
    <div className="col-lg-3 col-md-4 ">
      <div className="card-body m-3 bg-warning rounded">
        <div className=" mb-2 mt-2 m-2 ">
          <h6>
            {t.data}
          </h6>
          <h6>
            Id : {t._id}
          </h6>
          <Link to={`/detail/${t._id}`} className="btn btn-dark">detail</Link>
        </div>
        <br />
        <div className="d-flex ">
        
        </div>
      </div>
    </div>
  );
};

export default AlTodos;
