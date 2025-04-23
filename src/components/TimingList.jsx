import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Timings = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const { from, to } = state || {};

  const timings = ["10:00 AM", "3:00 PM"];

  const handleTimingClick = (time) => {
    navigate("/book-seat", { state: { from, to, time } });
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-yellow-700">
      <h1 className="text-4xl font-bold mb-6">
        Timings for {from} → {to}
      </h1>
      {timings.map((time, index) => (
        <button
          key={index}
          onClick={() => handleTimingClick(time)}
          className="bg-black text-white px-18 py-4 rounded-lg m-4">
          {time}
        </button>
      ))}
    </div>
  );
};

export default Timings;
