import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Book() {
    
  const css = `
.calendar-test {
    display: inline-block;
}
`;

  const [value, onChange] = useState(new Date());

  const today = new Date();
  today.setHours(0);
  today.setMinutes(0);
  today.setSeconds(0);
  today.setMilliseconds(0);

  function handleOnClick() {
    return console.log("working");
  }

  const isDateEnabled = (date) => {
    return date >= today;
  };

  const disableFutureDt = (current) => {
    return current.isBefore(today);
  };

  return (
    <>
      <br />
      <br />
      <br />
      <br />

      <div>
        <style>{css}</style>
        <h1 className="text-success">🎾 Boka din tid här 🎾</h1>
        <Calendar
          className="calendar-test"
          onChange={onChange}
          onClickDay={handleOnClick}
          minDate={today}
          value={value}
        />
      </div>
    </>
  );
}

export default Book;
