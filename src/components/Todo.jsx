import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeAllTodo, setTodo, sortTodo } from "../features/todo/todoSlice";
import AddTodoForm from "./AddTodoForm";
import TodoRow from "./TodoRow";

const Todo = () => {
  const [todoName, setTodoName] = useState("");
  const { todos, sortKey } = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  const handleRemoveAllToto = () => {
    dispatch(removeAllTodo());
  };

  const handleSortTodo = (data) => {
    dispatch(sortTodo(data));
  };

  useEffect(() => {
    if (todos.length) {
      const data = JSON.stringify(todos);
      localStorage.setItem("todos", data);
    }
  }, [todos]);

  useEffect(() => {
    const data = localStorage.getItem("todos");
    const dataParse = JSON.parse(data);
    if (dataParse.length) {
      dispatch(setTodo(dataParse));
    }
  }, []);

  let content;

  if (todos.length && sortKey) {
    content = todos
      .filter((todo) => {
        if (sortKey === "All") return true;
        if (sortKey === "Completed" && todo.completed) return true;
        if (sortKey === "Pending" && !todo.completed) return true;
      })
      .map((todo) => (
        <TodoRow key={todo._id} todo={todo} setTodoName={setTodoName} />
      ));
  }

  return (
    <div className="w-11/12 sm:w-4/5 md:w-7/12 lg:w-1/2 min-h-[550px] p-8 rounded-lg border-2 bg-white">
      <div>
        <h1 className="mb-2 text-primary font-semibold text-xl">TO DO APP</h1>
      </div>
      <AddTodoForm todoName={todoName} setTodoName={setTodoName} />

      <div className="flex flex-row justify-between mt-3">
        <button
          onClick={() => handleSortTodo("All")}
          className={`${
            sortKey === "All" ? "text-primary border-b-2 border-primary" : null
          } duration-300`}
        >
          All
        </button>
        <button
          onClick={() => handleSortTodo("Pending")}
          className={` ${
            sortKey === "Pending"
              ? "text-primary  border-b-2 border-primary"
              : null
          } duration-300`}
        >
          Pending
        </button>
        <button
          onClick={() => handleSortTodo("Completed")}
          className={` ${
            sortKey === "Completed"
              ? "text-primary  border-b-2 border-primary"
              : null
          } duration-300`}
        >
          Complete
        </button>
        <button
          onClick={handleRemoveAllToto}
          className="bg-primary px-2 py-1 rounded text-white"
        >
          Clear All
        </button>
      </div>
      <div className="border-t mt-3">
        {content?.length ? (
          content
        ) : (
          <p className="mt-3">You don't have any task here</p>
        )}
      </div>
    </div>
  );
};

export default Todo;
