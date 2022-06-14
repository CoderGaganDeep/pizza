import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user/slice";
import pizzaReducer from "./pizza/slice";

const store = configureStore({
  reducer: {
    user: userReducer,
    pizza: pizzaReducer,
  },
});

export default store;
