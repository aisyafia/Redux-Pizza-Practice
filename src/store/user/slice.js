import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "Helva",
  id: 42,
};

export const userSlice = createSlice({
  name: "users",
  initialState: initialState,
  reducers: {},
});

export const {} = userSlice.actions;

export default userSlice.reducer;
