import { createSlice } from '@reduxjs/toolkit';

const initialState = new Date().getMonth();

const currMonthSlice = createSlice({
  name: 'currMonthSlice',
  initialState,
  reducers: {
    setCurrMonth(state, action) {
      return action.payload;
    },
  },
});

export const { setCurrMonth } = currMonthSlice.actions;
export default currMonthSlice.reducer;
