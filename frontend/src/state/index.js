import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    EmployeeData: null,
};

const EmployeeDataSlice = createSlice({
    name: 'EmployeeData',
    initialState,
    reducers: {
        setEmployeeData: (state, action) => {
            state.EmployeeData = action.payload;
        },
    },
});

export const { setEmployeeData } = EmployeeDataSlice.actions;
export default EmployeeDataSlice.reducer;