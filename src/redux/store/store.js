import { configureStore } from "@reduxjs/toolkit";
import robotsReducer from "../features/robots/robotsSlice";
import uiReducer from "../features/ui/uiSlice";

const store = configureStore({
  reducer: {
    robots: robotsReducer,
    ui: uiReducer,
  },
});

export default store;
