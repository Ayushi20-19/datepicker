import React, { useState } from "react";
import WeekdayDateRangePicker from "./WeekdayDateRangePicker";
import "./DatePickerWrapper.css";

const DatePickerWrapper = () => {
  const [showPicker, setShowPicker] = useState(false);
  const [selectedRange, setSelectedRange] = useState(null);
  const [weekends, setWeekends] = useState([]);
  // Function to format date to "YYYY-MM-DD"
  const formatDate = (date) => {
    return date.toISOString().split("T")[0];
  };

  // Function to get the date N days before today
  const getPastDate = (daysAgo) => {
    const date = new Date();
    date.setDate(date.getDate() - daysAgo);
    return formatDate(date);
  };

  // Function to get the first day of the current month
  const getFirstDayOfCurrentMonth = () => {
    const date = new Date();
    date.setDate(1);
    return formatDate(date);
  };

  // Function to get the last day of the current month
  const getLastDayOfCurrentMonth = () => {
    const date = new Date();
    date.setMonth(date.getMonth() + 1);
    date.setDate(0);
    return formatDate(date);
  };

  const predefinedRanges = [
    { label: "Last Week", range: [getPastDate(7), formatDate(new Date())] },
    {
      label: "This Month",
      range: [getFirstDayOfCurrentMonth(), getLastDayOfCurrentMonth()],
    },
    { label: "Last 30 Days", range: [getPastDate(30), formatDate(new Date())] },
  ];

  const handlePickerChange = (range, weekends) => {
    setSelectedRange(range);
    console.log("Selected Range:", range);
    console.log("Weekends:", weekends);
    setWeekends(weekends);
    setShowPicker(false);
  };

  const togglePicker = () => setShowPicker((prev) => !prev);

  return (
    <div className="date-picker-wrapper">
      <input
        type="text"
        readOnly
        value={
          selectedRange ? `${selectedRange[0]} to ${selectedRange[1]}` : ""
        }
        placeholder="Select date range"
        onClick={togglePicker}
      />
      {weekends.length > 0 && (
        <div className="weekend-list">
          <p>All the weekends:</p>
          {weekends.map((weekend) => (
            <div key={weekend}>{weekend}</div>
          ))}
        </div>
      )}
      {showPicker && (
        <div className="date-picker-popup">
          <WeekdayDateRangePicker
            predefinedRanges={predefinedRanges}
            onChange={handlePickerChange}
          />
        </div>
      )}
    </div>
  );
};

export default DatePickerWrapper;
