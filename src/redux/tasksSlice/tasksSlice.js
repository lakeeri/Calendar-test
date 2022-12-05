import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const initialState = [];

const tasksSlice = createSlice({
  name: 'tasksSlice',
  initialState,
  reducers: {
    addTask(state, action) {
      const {
        year, month, date, title, start, end,
      } = action.payload;
      return [...state, {
        id: uuidv4(),
        year,
        month,
        date,
        title,
        start,
        end,
      }];
    },
    deleteTask(state, action) {
      return state.filter((task) => task.id !== action.payload);
    },
    editTask(state, action) {
      console.log(action.payload);
      return state.map((task) => (
        task.id === action.payload.id ? { ...action.payload } : task));
    },
  },
});

export const { addTask, deleteTask, editTask } = tasksSlice.actions;
export default tasksSlice.reducer;
