import React from "react";

const Header = () => {
  return (
    <div className="flex z-10 w-full px-8 py-2 absolute bg-gradient-to-b from-black justify-between">
      <h1 className="p-3 font-bold text-3xl text-gray-200">Patidar Travels</h1>
      <div className="flex p-3">
        <img
          className="w-12 rounded-full"
          alt="User-Profile "
          src="https://i.pinimg.com/736x/fa/93/01/fa9301440115d08f2834f1dcb69a689c.jpg"
        />
        <button
          // onClick={handleSignOut}
          className="cursor-pointer font-bold p-2 text-gray-100">
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default Header;
