import React from "react";

const Form = () => {
  return (
    <div>
      <form className="w-25 mx-auto mt-5">
      <div className=" text-center mb-5"><h3>Mern Todo App</h3></div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Enter Todo Title
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
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
