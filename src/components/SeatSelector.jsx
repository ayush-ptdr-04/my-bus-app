import React, { useState } from "react";

const SeatSelector = ({ onSeatSelect }) => {
  const [selectedSeat, setSelectedSeat] = useState(null);
  const seats = Array.from({ length: 10 }, (_, i) => i + 1); // Seats 1 to 10

  const handleSeatClick = (seat) => {
    setSelectedSeat(seat);
    onSeatSelect(seat);
  };

  return (
    <div>
      <h3>Select a Seat</h3>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {seats.map((seat) => (
          <div
            key={seat}
            onClick={() => handleSeatClick(seat)}
            style={{
              width: 50,
              height: 50,
              margin: 5,
              backgroundColor: selectedSeat === seat ? "green" : "lightgray",
              textAlign: "center",
              lineHeight: "50px",
              cursor: "pointer",
            }}>
            {seat}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SeatSelector;
