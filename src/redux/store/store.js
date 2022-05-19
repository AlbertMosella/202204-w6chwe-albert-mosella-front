import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/user/userSlice";
import robotsReducer from "../features/robots/robotsSlice";
import uiReducer from "../features/ui/uiSlice";

const store = configureStore({
  reducer: {
    robots: robotsReducer,
    ui: uiReducer,
    user: userReducer,
  },
});

export default store;
