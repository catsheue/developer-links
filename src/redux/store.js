import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import menuReducer from "./slice/menuSlice";

const reducer = {
  menuSlice: menuReducer,
};

export default configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
