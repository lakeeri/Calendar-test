import { createSlice } from '@reduxjs/toolkit';

const initialState = null;

const modalSuccessSlice = createSlice({
  name: 'modalSuccessSlice',
  initialState,
  reducers: {
    setModalSuccess(state, action) {
      return action.payload;
    },
  },
});

export const { setModalSuccess } = modalSuccessSlice.actions;
export default modalSuccessSlice.reducer;
