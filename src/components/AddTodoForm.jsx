import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { FaPlus } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

const AddTodoForm = ({ todoName, setTodoName }) => {
  const { currentTode, setcurrentTode } = useState("");
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    const randomNumber = Math.floor(Math.random() * 1000) + Date.now();

    const task = {
      _id: randomNumber,
      todoName: todoName,
      completed: false,
    };

    if (todoName.trim().length === 0) {
      toast.error("please write a task name");
    } else {
      dispatch(addTodo(task));
    }
  };

  return (
    <div>
      <div className="flex flex-row gap-x-2">
        <input
          className="flex-1 border-2 p-2 outline-none rounded text-primary focus:border-primary"
          type="text"
          placeholder="Enter a todo name"
          value={todoName}
          onChange={(e) => setTodoName(e.target.value)}
        />
        {currentTode ? (
          <button className="bg-primary rounded text-white border-2 px-4 py-2 border-primary">
            <FaPlus />
          </button>
        ) : (
          <button
            onClick={handleAddTodo}
            className="bg-primary rounded text-white border-2 px-4 py-2 border-primary"
          >
            <FaPlus />
          </button>
        )}
      </div>
    </div>
  );
};

export default AddTodoForm;
