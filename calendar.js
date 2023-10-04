import React, { useState } from 'react';
import './style.css'

const SimpleCalendar = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    return daysInMonth;
  };

  const getFirstDayOfMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    return new Date(year, month, 1).getDay();
  };

  const renderCalendar = () => {
    const daysInMonth = getDaysInMonth(currentMonth);
    const firstDayOfMonth = getFirstDayOfMonth(currentMonth);
    const blanks = Array(firstDayOfMonth).fill(null);
    const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);

    const calendarCells = [...blanks, ...days].map((day, index) => (
      <div key={index} className={`calendar-cell ${day ? '' : 'blank'}`}>
        {day}
      </div>
    ));

    return calendarCells;
  };

  const prevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1));
  };

  const nextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1));
  };

  return (
    <div className="simple-calendar">
      <div className="calendar-header">
        <button onClick={prevMonth}>&lt;</button>
        <h2>
          {currentMonth.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
        </h2>
        <button onClick={nextMonth}>&gt;</button>
      </div>
      <div className="calendar-grid">{renderCalendar()}</div>
    </div>
  );
};

export default SimpleCalendar;
