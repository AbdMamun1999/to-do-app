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
    updateTodo: (state, action) => {
      const indexTodo = state.todos.findIndex(
        (todo) => todo._id === action.payload._id
      );
      state.todos[indexTodo].todoName = action.payload.todoName;
    },
    setCurrentTodo: (state, action) => {
      state.currentTodo = action.payload;
    },
    toggleCompleted: (state, action) => {
      const indexTodo = state.todos.findIndex(
        (todo) => todo._id === action.payload
      );
      state.todos[indexTodo].completed = !state.todos[indexTodo].completed;
    },
    removeAllTodo: (state) => {
      state.todos = [];
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
    sortTodo: (state, action) => {
      state.sortKey = action.payload;
    },
  },
});

export const {
  addTodo,
  setTodo,
  removeTodo,
  updateTodo,
  setCurrentTodo,
  toggleCompleted,
  removeAllTodo,
  sortTodo,
} = todoSlice.actions;

export default todoSlice.reducer;
