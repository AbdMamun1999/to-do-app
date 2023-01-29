import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";

const AddTodoForm = () => {
  const { currentTode, setcurrentTode } = useState("");
  return (
    <div>
      <div className="flex flex-row gap-x-2">
        <input
          className="flex-1 border-2 p-2 outline-none rounded text-primary focus:border-primary"
          placeholder="Enter a todo name"
          type="text"
        />
        {currentTode ? (
          <button className="bg-primary rounded text-white border-2 px-4 py-2 border-primary">
            <FaPlus />
          </button>
        ) : (
          <button className="bg-primary rounded text-white border-2 px-4 py-2 border-primary">
            <FaPlus />
          </button>
        )}
      </div>
    </div>
  );
};

export default AddTodoForm;
