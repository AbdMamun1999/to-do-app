import React, { useState } from "react";
import AddTodoForm from "./AddTodoForm";
import TodoRow from "./TodoRow";

const Todo = () => {
  const [todoName, setTodoName] = useState("");

  return (
    <div className="w-[400px] min-h-[550px] p-8 rounded-lg border-2 bg-white">
      <div>
        <h1 className="mb-2 text-primary font-semibold text-xl">TO DO APP</h1>
      </div>
      <AddTodoForm todoName={todoName} setTodoName={setTodoName} />

      <div className="flex flex-row justify-between mt-3">
        <button>All</button>
        <button>Pending</button>
        <button>Complete</button>
        <button className="bg-primary px-2 py-1 rounded text-white">
          Clear All
        </button>
      </div>
      <div className="border-t mt-3">
        {/* <p className="mt-3">You don't have any task here</p> */}
        <TodoRow />
      </div>
    </div>
  );
};

export default Todo;
