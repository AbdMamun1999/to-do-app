import React from "react";
import { CgRadioCheck } from "react-icons/cg";
import { FiEdit } from "react-icons/fi";
import { FaTrash } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { removeTodo, setCurrentTodo } from "../features/todo/todoSlice";

const TodoRow = ({ todo,setTodoName }) => {
  const dispatch = useDispatch();

  const handleCurrentTodo = (data) => {
    dispatch(setCurrentTodo(data));
    setTodoName(data.todoName);
  };

  return (
    <div className="flex flex-row justify-between items-center mt-3 border-b pb-3">
      <div className="flex flex-row gap-x-2 ">
        <button>
          <CgRadioCheck />
        </button>
        <p>{todo.todoName}</p>
      </div>

      <div>
        <button onClick={() => handleCurrentTodo(todo)} className="mr-4">
          <FiEdit />
        </button>
        <button onClick={() => dispatch(removeTodo(todo._id))}>
          <FaTrash />
        </button>
      </div>
    </div>
  );
};

export default TodoRow;
