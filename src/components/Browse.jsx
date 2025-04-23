import { useNavigate } from "react-router-dom";
import Header from "./Header";

const Browse = () => {
  const navigate = useNavigate();

  const handleRouteClick = (from, to) => {
    navigate("/timings", {
      state: { from, to },
    });
  };

  return (
    <div>
      <Header />
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-around bg-yellow-700">
        <div
          onClick={() => handleRouteClick("Khargone", "Indore")}
          className="cursor-pointer h-96 w-96 rounded-xl bg-black shadow-xl">
          <img
            className="rounded-t-xl "
            src="https://gst-contracts.s3.amazonaws.com/uploads/bcc/cms/asset/avatar/60944/about.jpg"
            alt="image"
          />
          <div className="p-4 text-gray-100">
            <h1 className="text-lg font-bold p-1">Khargone → Indore</h1>
            <h1 className="text-lg p-1">DEPARTURE TIME</h1>
          </div>
        </div>

        <div
          onClick={() => handleRouteClick("Indore", "Khargone")}
          className="cursor-pointer h-96 w-96 rounded-xl bg-black shadow-xl">
          <img
            className="rounded-t-xl  "
            src="https://content3.jdmagicbox.com/comp/surat/j7/0261px261.x261.190814151347.h2j7/catalogue/patidar-travels-surat-althan-surat-bus-services-8525o7niss.jpg"
            alt="image"
          />
          <div className="p-4 text-gray-100">
            <h1 className="text-lg font-bold p-1">Indore → Khargone</h1>
            <h1 className="text-lg p-1">DEPARTURE TIME</h1>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Browse;
