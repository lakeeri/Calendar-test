import { createSlice } from '@reduxjs/toolkit';

const initialState = null;

const modalAddTaskSlice = createSlice({
  name: 'modalAddTaskSlice',
  initialState,
  reducers: {
    setModalAddTask(state, action) {
      return action.payload;
    },
  },
});

export const { setModalAddTask } = modalAddTaskSlice.actions;
export default modalAddTaskSlice.reducer;
