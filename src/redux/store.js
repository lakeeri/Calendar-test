import { configureStore } from '@reduxjs/toolkit';
import currMonthSlice from './currMonthSlice/currMonthSlice';
import currYearSlice from './currYearSlice/currYearSlice';
import monthsSlise from './monthsSlice/monthsSlise';
import nameDaysSlice from './nameDaysSlice/nameDaysSlice';
import notificationSlice from './notificationSlice/notificationSlice';
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
    notifications: notificationSlice,
  },
});

export default store;
