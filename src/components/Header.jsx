import React from "react";

const Header = () => {
  return (
    <div className="flex z-10 w-full px-8 py-2 absolute bg-gradient-to-b from-black justify-between">
      <h1 className="p-3 font-bold text-3xl text-gray-100">પાટીદાર બસ🚍</h1>
      <div className="flex p-3">
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
