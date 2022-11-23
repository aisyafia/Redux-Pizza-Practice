import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allResto: [
    {
      name: "Sotto Pizza",
      id: 56642,
      pizzas: [67283, 357311],
    },
    {
      name: "I Pazzi",
      id: 56643,
      pizzas: [161235],
    },
    {
      name: "Pizza Napoli",
      id: 56644,
      pizzas: [161235, 357311],
    },
    {
      name: "Eatmosfera",
      id: 56645,
      pizzas: [67283, 161235],
    },
  ],
};

export const restoSlice = createSlice({
  name: "restaurant",
  initialState: initialState,
  reducers: {},
});

export const {} = restoSlice.actions;

export default restoSlice.reducer;
