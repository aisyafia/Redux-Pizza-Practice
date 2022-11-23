import { configureStore } from "@reduxjs/toolkit";
import pizzasSlice from "./pizzas/slice";
import userSlice from "./user/slice";

const store = configureStore({
  reducer: {
    user: userSlice,
    pizzas: pizzasSlice,
  },
});

export default store;
