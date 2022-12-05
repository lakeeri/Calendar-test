import { createSlice } from '@reduxjs/toolkit';

const initialState = new Date().getFullYear();

const currYearSlice = createSlice({
  name: 'currYearSlice',
  initialState,
  reducers: {
    setCurrYear(state, action) {
      return action.payload;
    },
  },
});

export const { setCurrYear } = currYearSlice.actions;
export default currYearSlice.reducer;
