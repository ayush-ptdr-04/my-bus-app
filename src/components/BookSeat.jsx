import React, { useState } from "react";
import { useLocation } from "react-router-dom";

const BookSeat = () => {
  const { state } = useLocation();
  const { from, to, time } = state || {};
  const [selectedSeat, setSelectedSeat] = useState(null);

  const handleBooking = () => {
    if (selectedSeat) {
      // Banayenge ek booking object
      const newBooking = {
        seat: selectedSeat,
        from,
        to,
        time,
      };

      // Pehle se jo booking hai usko uthayenge
      const existingBookings =
        JSON.parse(localStorage.getItem("bookings")) || [];

      // Check karenge seat already booked to nahi
      const isAlreadyBooked = existingBookings.some(
        (b) =>
          b.seat === selectedSeat &&
          b.from === from &&
          b.to === to &&
          b.time === time
      );

      if (isAlreadyBooked) {
        alert(
          `❌Seat ${selectedSeat} is already booked for this route & time.`
        );
        return;
      }

      // Nahi to add karenge booking list me
      existingBookings.push(newBooking);
      localStorage.setItem("bookings", JSON.stringify(existingBookings));

      // Show success confirmation
      alert(
        `🎉 Seat ${selectedSeat} booked successfully from ${from} to ${to} at ${time}`
      );
      // Optionally, redirect or show popup here
    } else {
      alert("❌ Please select a seat first.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-yellow-700">
      <h1 className="text-4xl font-bold">
        Booking Seat for {from} → {to}
      </h1>
      <p className="m-6 text-3xl">Time: {time}</p>
      <div className="grid grid-cols-5 gap-4 mb-4">
        {Array.from({ length: 10 }, (_, i) => (
          <div
            key={i}
            onClick={() => setSelectedSeat(i + 1)}
            className={`w-12 h-12 flex items-center justify-center rounded ${
              selectedSeat === i + 1 ? "bg-green-500" : "bg-gray-300"
            } cursor-pointer`}>
            {i + 1}
          </div>
        ))}
      </div>
      <button
        onClick={handleBooking}
        className="bg-black text-white px-4 py-4 rounded-lg">
        Confirm Booking
      </button>
    </div>
  );
};

export default BookSeat;
