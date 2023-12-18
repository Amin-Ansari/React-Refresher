import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./slices";

const mainStore = configureStore({ reducer: { theme: themeReducer } });

export default mainStore;
