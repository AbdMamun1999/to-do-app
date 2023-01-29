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
   
 
  },
});


export default todoSlice.reducer;
