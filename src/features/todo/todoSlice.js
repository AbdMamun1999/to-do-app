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
  },
});

export const { addTodo,setTodo } = todoSlice.actions;

export default todoSlice.reducer;
