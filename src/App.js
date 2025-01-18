import React from "react";
import DatePickerWrapper from "./components/DatePickerWrapper";
import "./App.css";
const App = () => {
  return (
    <div className="app-container">
      <h1 className="title">Date Range Picker</h1>
      <div className="date-picker-container">
        <DatePickerWrapper />
      </div>
    </div>
  );
};

export default App;
