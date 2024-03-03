// store.js

import { configureStore, combineReducers } from '@reduxjs/toolkit';
import employeeDataReducer from './index';
import jobsReducer from './JobsSlice';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  whitelist: ['EmployeeData', 'Jobs'],
};

const persistedReducer = persistReducer(persistConfig, combineReducers({
  EmployeeData: employeeDataReducer,
  Jobs: jobsReducer,
}));

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
export const persistor = persistStore(store);
