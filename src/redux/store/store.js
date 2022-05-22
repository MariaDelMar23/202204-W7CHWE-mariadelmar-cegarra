import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "../features/UserSlice";

const store = configureStore({
  reducer: {
    user: UserReducer,
  },
});

export default store;
