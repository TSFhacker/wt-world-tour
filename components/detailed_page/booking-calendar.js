"use client";

import Calendar from "react-calendar";
import "./booking-calendar.css";
import { useState } from "react";

export default function BookingCalendar() {
  const [numberOfPeople, setNumberOfPeople] = useState(50);
  const [bookDate, setBookDate] = useState(new Date());

  const handleBooking = function () {
    if (bookDate && numberOfPeople) alert("Sent request succesfully");
    else alert("Please fill both fields");
  };

  return (
    <div className="booking">
      <h2>Book now!</h2>
      <div className="booking_container">
        <div className="number_of_people">
          <label htmlFor="number">Number of people</label>
          <input
            type="number"
            name="number"
            placeholder="Number of people"
            value={numberOfPeople}
            onChange={(e) => {
              setNumberOfPeople(e.target.value);
            }}
            required
          />
        </div>
        <Calendar
          className="calendar"
          onChange={setBookDate}
          value={bookDate}
        />
      </div>
      <div className="book_button">
        <button onClick={handleBooking}>Book</button>
      </div>
    </div>
  );
}
