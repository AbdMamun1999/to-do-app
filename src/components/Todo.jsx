import React from "react";
import AddTodoForm from "./AddTodoForm";

const Todo = () => {
  return (
    <div className="w-[400px] min-h-[550px] p-8 rounded-lg border-2 bg-white">
      <div><h1 className='mb-2 text-primary font-semibold text-xl'>TO DO APP</h1>
      </div>
      <AddTodoForm/>
    </div>
  );
};

export default Todo;
