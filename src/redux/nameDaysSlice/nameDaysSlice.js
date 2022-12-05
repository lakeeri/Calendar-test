import { createSlice } from '@reduxjs/toolkit';

const initialState = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
const nameDaysSlice = createSlice({
  name: 'nameDaysSlice',
  initialState,
});

export default nameDaysSlice.reducer;
