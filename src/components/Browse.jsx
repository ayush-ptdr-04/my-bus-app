import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Header from "./Header";
import {
  FaBus,
  FaExchangeAlt,
  FaLocationArrow,
  FaMapMarkerAlt,
  FaCalendarAlt,
} from "react-icons/fa";
import Footer from "./Footer";

const Browse = () => {
  const [leavingFrom, setLeavingFrom] = useState("");
  const [goingTo, setGoingTo] = useState("");
  const [selectedDate, setSelectedDate] = useState(new Date());
  const navigate = useNavigate();

  const allowedRoutes = [
    { from: "Khargone", to: "Indore" },
    { from: "Indore", to: "Khargone" },
    { from: "Indore", to: "Bhopal" },
    { from: "Bhopal", to: "Indore" },
    { from: "Indore", to: "Ujjain" },
    { from: "Indore", to: "Ahemdabad" },
  ];

  // Function to handle search button click
  const handleSearch = (from = leavingFrom, to = goingTo) => {
    if (!from || !to) {
      alert("Please fill in both Leaving From and Going To fields.");
      return;
    }

    const isAllowed = allowedRoutes.some(
      (route) => route.from === from && route.to === to
    );

    if (isAllowed) {
      navigate("/timings", {
        state: { from, to },
      });
    } else {
      alert("This route is not available right now.");
    }
  };

  return (
    <div
      className="pt-20 min-h-screen bg-cover bg-center relative bg-black"
      style={{ backgroundImage: "url('/image.png')" }}>
      <div className="fixed top-0 left-0 w-full z-50">
        <Header />
      </div>

      {/* Search Section */}
      <div className="p-6 max-w-7xl mx-auto bg-gray-700 rounded-2xl shadow-lg">
        {/* Tabs */}
        <div className="flex justify-between items-center m-4">
          <div className="flex gap-6 items-center">
            <div className="text-center">
              <FaBus className="text-2xl mx-auto text-red-500" />
              <p className="text-gray-700 font-semibold">Buses</p>
              <div className="h-1 bg-red-400 rounded-full mt-1"></div>
            </div>
          </div>
          <p className="text-lg text-gray-200">Book Buses</p>
        </div>

        {/* Input Section */}
        <div className="bg-gray-100 p-2 rounded-xl flex flex-wrap gap-2 items-center justify-between">
          <div className="flex items-center gap-2 flex-1 min-w-[160px]">
            <FaLocationArrow className="text-gray-500" />
            <input
              type="text"
              placeholder="Leaving From"
              className="bg-transparent outline-none w-full"
              value={leavingFrom}
              onChange={(e) => setLeavingFrom(e.target.value)}
              list="locations"
            />
            <datalist id="locations">
              <option value="Indore" />
              <option value="Bhopal" />
              <option value="Khargone" />
              <option value="Ahemdabad" />
              <option value="Ujjain" />
            </datalist>
          </div>

          <div className="text-gray-400">
            <FaExchangeAlt />
          </div>

          <div className="flex items-center gap-2 flex-1 min-w-[160px]">
            <FaMapMarkerAlt className="text-gray-500" />
            <input
              type="text"
              placeholder="Going To"
              className="bg-transparent outline-none w-full"
              value={goingTo}
              onChange={(e) => setGoingTo(e.target.value)}
              list="locations"
            />
          </div>

          <div className="flex items-center gap-2 flex-1 min-w-[160px]">
            <FaCalendarAlt className="text-gray-500" />
            <DatePicker
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              dateFormat="dd/MM/yyyy"
              className="bg-transparent outline-none w-full"
              placeholderText="25/04/2025"
            />
          </div>

          <button
            onClick={() => handleSearch()}
            className="bg-red-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-red-600">
            Search →
          </button>
        </div>
      </div>

      {/* Route Cards - Only showing allowed routes */}
      <div className="w-full flex flex-wrap flex-col md:flex-row gap-16 justify-center items-center mt-5 px-4">
        {allowedRoutes.map((route, index) => (
          <div
            key={index}
            onClick={() => handleSearch(route.from, route.to)}
            className="cursor-pointer h-96 w-80 rounded-xl bg-gray-700 shadow-xl overflow-hidden">
            <img
              className="rounded-t-xl w-full h-1/2 object-cover"
              src={
                [
                  "https://gst-contracts.s3.amazonaws.com/uploads/bcc/cms/asset/avatar/60944/about.jpg",
                  "https://content3.jdmagicbox.com/comp/surat/j7/0261px261.x261.190814151347.h2j7/catalogue/patidar-travels-surat-althan-surat-bus-services-8525o7niss.jpg",
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNMYyLy9HJv9T99dB5v0rh2czObItpHyOQQg&s",
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoTebFYjJ5MLNb0wDNSjRwxUsiM85Mfct-GFnQpPKc7E0PL32RmDwmGF0rMK4uJS18DmE&usqp=CAU",
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLs8nYoovdkpEuDzIslLEe6zTvPEZeHaQ8hQ&s",
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxJvtgTZ6EBF6LgyywrZ8x1F4GKhZBghKS0cZ2-THcDxBpHetS5t5JkxOhev3C2DmJwJY&usqp=CAU",
                ][index % 6]
              }
              alt="route"
            />
            <div className="p-4 text-gray-100">
              <h1 className="text-lg font-bold p-1">
                {route.from} → {route.to}
              </h1>
              <h1 className="text-lg p-1">DEPARTURE TIME</h1>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Browse;
