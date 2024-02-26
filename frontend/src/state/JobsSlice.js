// jobsSlice.js

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  jobs: null,
};

const JobsSlice = createSlice({
  name: 'Jobs',
  initialState,
  reducers: {
    setJobs: (state, action) => {
      state.jobs = action.payload;
    },
  },
});

export const { setJobs } = JobsSlice.actions;
export default JobsSlice.reducer;
