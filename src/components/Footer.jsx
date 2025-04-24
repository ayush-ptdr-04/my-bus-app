import React from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-black text-white py-2 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-xl font-bold mb-4">Contact Us</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Phone */}
          <div className="flex items-center">
            <FaPhone className="text-red-500 mr-3" />
            <div>
              <p className="text-gray-400 text-sm">Phone</p>
              <p className="font-medium">+91 98765 43210</p>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-center">
            <FaEnvelope className="text-red-500 mr-3" />
            <div>
              <p className="text-gray-400 text-sm">Email</p>
              <p className="font-medium">1234@patidartravels.com</p>
            </div>
          </div>

          {/* Address */}
          <div className="flex items-center">
            <FaMapMarkerAlt className="text-red-500 mr-3" />
            <div>
              <p className="text-gray-400 text-sm">Address</p>
              <p className="font-medium">123 Travel Plaza, Indore, MP</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} Patidar Travels. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
