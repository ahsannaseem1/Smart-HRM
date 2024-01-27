import { configureStore } from '@reduxjs/toolkit';
import employeeDataReducer from './index';

export const store=configureStore({
    reducer:employeeDataReducer
})

