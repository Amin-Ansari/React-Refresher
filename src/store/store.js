import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./slices";
import counterReducer from "./counter-slice";

const mainStore = configureStore({
  reducer: { theme: themeReducer, counterSlice: counterReducer },
});

export default mainStore;
