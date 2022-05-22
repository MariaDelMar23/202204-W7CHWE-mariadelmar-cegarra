import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "../features/UserSlice";
import UsersReducer from "../features/UsersSlice";

const store = configureStore({
  reducer: {
    user: UserReducer,
    users: UsersReducer,
  },
});

export default store;
