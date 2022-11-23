import { configureStore } from "@reduxjs/toolkit";
import pizzasSlice from "./pizzas/slice";
import userSlice from "./user/slice";
import restoSlice from "./restaurants/slice";

const store = configureStore({
  reducer: {
    user: userSlice,
    pizzas: pizzasSlice,
    restaurants: restoSlice,
  },
});

export default store;
