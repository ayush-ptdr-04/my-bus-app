import React from "react";
import Header from "./Header";

const Browse = () => {
  return (
    <div>
      <Header />
      <div className="absolute  top-0 left-0 w-full h-full flex items-center justify-around bg-yellow-700">
        <div className=" h-96 w-96 rounded-xl bg-black shadow-xl">
          <img
            className="rounded-t-xl grayscale opacity-95"
            src="https://gst-contracts.s3.amazonaws.com/uploads/bcc/cms/asset/avatar/60944/about.jpg"
            alt="image"
            srcset=""
          />
          <div className="p-4 text-gray-100">
            <h1 className="text-lg font-bold p-1">Khargone → Indore</h1>
            <h1 className="text-lg p-1">DEPARTURE TIME</h1>
          </div>
        </div>
        <div className=" h-96 w-96 rounded-xl bg-black shadow-xl">
          <img
            className="rounded-t-xl grayscale opacity-85"
            src="https://content3.jdmagicbox.com/comp/surat/j7/0261px261.x261.190814151347.h2j7/catalogue/patidar-travels-surat-althan-surat-bus-services-8525o7niss.jpg"
            alt="image"
            srcset=""
          />
          <div className="p-4 text-gray-100 ">
            <h1 className="text-lg font-bold p-1">Indore → Khargone</h1>
            <h1 className="text-lg p-1">DEPARTURE TIME</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Browse;
