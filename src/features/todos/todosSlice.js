import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";

const todosSlice = createSlice({
  name: "todos",
  initialState: {
    entities: [],
  },
  reducers: {
    todoAdded(state, action) {
      state.entities.push({
        id: uuid(),
        text: action.payload
      });
    },
    todoRemoved(state, action) {
      const index = state.entities.findIndex((todo) => todo.id === action.payload);
      console.log("🚀 ~ file: todosSlice.js ~ line 18 ~ todoRemoved ~ index", index)
      state.entities.splice(index, 1);
    }
  },
});

export const { todoAdded, todoRemoved } = todosSlice.actions;

export default todosSlice.reducer;