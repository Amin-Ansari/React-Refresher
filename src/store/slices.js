import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
  name: "themeSlice",
  initialState: { theme: "light" },
  reducers: {
    setToDark: (state) => {
      state.theme = "dark";
    },
    setToLight: (state) => {
      state.theme = "light";
    },
  },
});

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    counter: 0,
  },
  reducers: {
    increment: (state) => {
      if (state.counter < 99) {
        state.counter += 1;
      }
    },
    decrement: (state) => {
      if (state.counter >= 1) {
        state.counter -= 1;
      }
    },
  },
});

const themeReducer = themeSlice.reducer;

export default themeReducer;

export const themeActions = themeSlice.actions;
