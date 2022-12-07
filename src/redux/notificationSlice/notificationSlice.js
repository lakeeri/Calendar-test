import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const initialState = [];

const notificationSlice = createSlice({
  name: 'notificationSlice',
  initialState,
  reducers: {
    addNotification(state, action) {
      return [...state, {
        ...action.payload, id: uuidv4(),
      }];
    },
    deleteNotification(state, action) {
      return state.filter((note) => note.id !== action.payload);
    },
  },
});

export const { addNotification, deleteNotification } = notificationSlice.actions;
export default notificationSlice.reducer;
