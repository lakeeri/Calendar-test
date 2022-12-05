import { createSlice } from '@reduxjs/toolkit';

const initialState = null;

const modalEditTaskSlice = createSlice({
  name: 'modalEditTaskSlice',
  initialState,
  reducers: {
    setModalEditTask(state, action) {
      return action.payload;
    },
  },
});

export const { setModalEditTask } = modalEditTaskSlice.actions;
export default modalEditTaskSlice.reducer;
