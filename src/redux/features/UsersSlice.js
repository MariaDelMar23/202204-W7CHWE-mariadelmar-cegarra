import { createSlice } from "@reduxjs/toolkit";

const UsersSlice = createSlice({
  name: "users",
  initialState: [],
  reducers: {
    getUsers: (users, action) => [...action.payload],
  },
});

export default UsersSlice.reducer;

export const { getUsers: getUsersActionCreator } = UsersSlice.actions;
