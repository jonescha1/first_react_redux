import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      if (action.payload !== "") {
        return { items: [...state.items, action.payload] };
      }
    },
    removeOneTodo: (state, action) => {
      let arr = [...state.items];
      let index = action.payload;
      if (index !== -1) {
        arr.splice(index, 1);
        return { items: arr };
      }
    },
    clearTodos: (state) => {
      return { items: [] };
    },
  },
});

export const { addTodo, clearTodos, removeOneTodo } = todoSlice.actions;

export default todoSlice.reducer;
