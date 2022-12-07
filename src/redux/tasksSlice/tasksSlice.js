import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const initialState = [];

const tasksSlice = createSlice({
  name: 'tasksSlice',
  initialState,
  reducers: {
    addTask(state, action) {
      return [...state, {
        ...action.payload,
        id: uuidv4(),
        title: action.payload.title || '(Без заголовка)',
      }];
    },
    deleteTask(state, action) {
      return state.filter((task) => task.id !== action.payload);
    },
    editTask(state, action) {
      return state.map((task) => (
        task.id === action.payload.id ? { ...action.payload } : task));
    },
  },
});

export const { addTask, deleteTask, editTask } = tasksSlice.actions;
export default tasksSlice.reducer;
