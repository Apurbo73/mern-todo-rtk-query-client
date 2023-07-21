import React from "react";

const AlTodos = ({ t }) => {
  return (
    <div className="col-lg-3 col-md-4 ">
      <div className="card-body m-3 bg-warning ">
        <div className=" mb-2 mt-2 m-2 ">
          <h6>
            {t.data}
          </h6>
        </div>
        <br />
        <div className="d-flex ">
          <div className="btn btn-success m-2">Edit</div> <br />
          <div className="btn btn-danger m-2">Delete</div>
        </div>
      </div>
    </div>
  );
};

export default AlTodos;
