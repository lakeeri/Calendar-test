import { createSlice } from '@reduxjs/toolkit';

const initialState = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
const monthsSlice = createSlice({
  name: 'monthsSlice',
  initialState,
});

export default monthsSlice.reducer;
