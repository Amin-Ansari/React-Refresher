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

const themeReducer = themeSlice.reducer;

export default themeReducer;

export const themeActions = themeSlice.actions;
