import { configureStore } from "@reduxjs/toolkit";
import robotsReducer from "../robots/robotsSlice";

const store = configureStore({
  reducer: {
    robots: robotsReducer,
  },
});

export default store;