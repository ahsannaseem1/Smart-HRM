import { configureStore } from "@reduxjs/toolkit";
import employeeDataReducer from "./index";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
  whitelist: ["EmployeeData"], // Correct usage: an array of keys to persist
};

const persistedReducer = persistReducer(persistConfig, employeeDataReducer);
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
export const persistor = persistStore(store);