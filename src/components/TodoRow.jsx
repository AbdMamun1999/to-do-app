import React from "react";
import { CgRadioCheck } from "react-icons/cg";
import { FiEdit } from "react-icons/fi";
import { FaTrash } from "react-icons/fa";

const TodoRow = ({ todo }) => {
  return (
    <div className="flex flex-row justify-between items-center mt-3 border-b pb-3">
      <div className="flex flex-row gap-x-2 ">
        <button>
          <CgRadioCheck />
        </button>
        <p>{todo.todoName}</p>
      </div>

      <div>
        <button className="mr-4">
          <FiEdit />
        </button>
        <button>
          <FaTrash />
        </button>
      </div>
    </div>
  );
};

export default TodoRow;
