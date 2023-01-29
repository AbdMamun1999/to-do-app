import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
  sortKey: "All",
  currentTodo: "",
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
    },
    setTodo: (state, action) => {
      state.todos = action.payload;
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo._id !== action.payload);
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
  },
});

export const { addTodo, setTodo, removeTodo } = todoSlice.actions;

export default todoSlice.reducer;
