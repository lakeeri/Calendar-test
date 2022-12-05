import React from 'react';
import { Route, Routes } from 'react-router-dom';
import CalendarField from './Calendar/CalendarField/CalendarField';
import TasksField from './Tasks/TaskField/TasksField';
import './App.css';

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<CalendarField />} />
        <Route path="/tasks/:year/:month/:date" element={<TasksField />} />
      </Routes>
    </div>
  );
}

export default App;
