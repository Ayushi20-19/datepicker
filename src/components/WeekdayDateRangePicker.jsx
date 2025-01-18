import React, { useState } from "react";
import "./WeekdayDateRangePicker.css";

const isWeekend = (date) => {
  const day = date.getDay();
  return day === 0 || day === 6; // Sunday (0) and Saturday (6)
};

const formatDate = (date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Month is 0-indexed
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};

const WeekdayDateRangePicker = ({ predefinedRanges, onChange }) => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const handleDateClick = (date) => {
    const selectedDate = new Date(date);
    selectedDate.setHours(0, 0, 0, 0);
    if (isWeekend(selectedDate)) return;
    if (!startDate || (startDate && endDate)) {
      setStartDate(selectedDate);
      setEndDate(null);
    } else if (selectedDate > startDate) {
      setEndDate(selectedDate);
    }
  };

  const changeMonth = (direction) => {
    const newMonth = new Date(
      currentMonth.getFullYear(),
      currentMonth.getMonth() + direction
    );
    setCurrentMonth(newMonth);
  };

  const changeYear = (direction) => {
    const newYear = new Date(currentMonth);
    newYear.setFullYear(currentMonth.getFullYear() + direction);
    setCurrentMonth(newYear);
  };

  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const days = [];
    const firstDay = new Date(year, month, 1).getDay();
    const totalDays = new Date(year, month + 1, 0).getDate();

    for (let i = 0; i < firstDay; i++) days.push(null);
    for (let i = 1; i <= totalDays; i++) {
      const currentDate = new Date(year, month, i);
      days.push(currentDate);
    }
    return days;
  };

  const applyPredefinedRange = (range) => {
    const [start, end] = range;
    const startDateObj = new Date(start);
    const endDateObj = new Date(end);
    startDateObj.setHours(0, 0, 0, 0);
    endDateObj.setHours(0, 0, 0, 0);
    setStartDate(startDateObj);
    setEndDate(endDateObj);
  };

  const handleSubmit = () => {
    if (startDate && endDate) {
      const range = [formatDate(startDate), formatDate(endDate)];
      const weekends = [];
      let current = new Date(startDate);

      while (current <= endDate) {
        if (isWeekend(current)) weekends.push(formatDate(current));
        current.setDate(current.getDate() + 1);
      }

      onChange(range, weekends);
    }
  };

  const days = getDaysInMonth(currentMonth);

  return (
    <div className="date-range-picker">
      <div className="header">
        <button className="arrow" onClick={() => changeYear(-1)}>
          {"<<"}
        </button>
        <button className="arrow" onClick={() => changeMonth(-1)}>
          {"<"}
        </button>
        <span>
          {currentMonth.toLocaleString("default", { month: "long" })}{" "}
          {currentMonth.getFullYear()}
        </span>
        <button className="arrow" onClick={() => changeMonth(1)}>
          {">"}
        </button>
        <button className="arrow" onClick={() => changeYear(1)}>
          {">>"}
        </button>
      </div>

      <div className="calendar">
        <div className="days-header">
          {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
            <div key={day}>{day}</div>
          ))}
        </div>
        <div className="days">
          {days.map((day, index) => {
            const isSelected =
              day &&
              ((startDate && formatDate(day) === formatDate(startDate)) ||
                (endDate && formatDate(day) === formatDate(endDate)));
            const isInRange =
              day &&
              startDate &&
              endDate &&
              day > startDate &&
              day < endDate &&
              !isWeekend(day);

            return (
              <div
                key={index}
                className={`day ${
                  day ? (isWeekend(day) ? "weekend" : "") : "empty"
                } ${isSelected ? "selected" : ""} ${
                  isInRange ? "in-range" : ""
                }`}
                onClick={() => day && handleDateClick(day)}
              >
                {day ? day.getDate() : ""}
              </div>
            );
          })}
        </div>
      </div>

      <div className="predefined-ranges">
        {predefinedRanges.map((range) => (
          <button
            className="predefined-range-btn"
            key={range.label}
            onClick={() => applyPredefinedRange(range.range)}
          >
            {range.label}
          </button>
        ))}
      </div>

      <button className="submit" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
};

export default WeekdayDateRangePicker;
