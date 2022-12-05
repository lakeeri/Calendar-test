import { configureStore } from '@reduxjs/toolkit';
import currMonthSlice from './currMonthSlice/currMonthSlice';
import currYearSlice from './currYearSlice/currYearSlice';
import modalAddTaskSlice from './modalSlices/modalAddTaskSlice';
import modalEditTaskSlice from './modalSlices/modalEditTaskSlice';
import modalSuccessSlice from './modalSlices/modalSuccessSlice';
import monthsSlise from './monthsSlice/monthsSlise';
import nameDaysSlice from './nameDaysSlice/nameDaysSlice';
import tasksSlice from './tasksSlice/tasksSlice';
import yearsSlice from './yearsSlice/yearsSlice';

const store = configureStore({
  reducer: {
    months: monthsSlise,
    years: yearsSlice,
    nameDays: nameDaysSlice,
    currYear: currYearSlice,
    currMonth: currMonthSlice,
    tasks: tasksSlice,
    modalAddTask: modalAddTaskSlice,
    modalEditTask: modalEditTaskSlice,
    modalSuccess: modalSuccessSlice,
  },
});

export default store;
