import React from 'react';
import UpdateForm from './UpdateForm';
import { useGetSingleTodoQuery } from '../../features/apiSlice';
import { useParams } from 'react-router-dom';

const Update = () => {
    const {id}=useParams();
    const {
      data: singleTodo,
      isLoading,
      isError,
      error
    } = useGetSingleTodoQuery(id);
    console.log(singleTodo);
    return (
      <div>
        {singleTodo && <UpdateForm singleTodo={singleTodo} />}
      </div>
    );
};

export default Update;