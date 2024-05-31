import React, { useState } from "react";
import { Context } from "../App";
import { useContext } from "react";

const Profile = () => {
  const [showPopup, setShowPopup] = useState(false);
  const { mail, setmail, log, setlog } = useContext(Context);
  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  const handleMouseEnter = () => {
    setShowPopup(true);
  };

  const handleMouseLeave = () => {
    setShowPopup(false);
  };

  return (
    <div className="relative">
      <img
        className="rounded-full w-10 h-10 border-1 border-gray-300 cursor-pointer"
        src="https://png.pngitem.com/pimgs/s/80-802775_transparent-background-user-png-png-download.png"
        alt="Profile"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
      {showPopup && (
        <div
          className="absolute top-full right-0 bg-white border border-gray-300 shadow-md p-2 rounded-md"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div>
            <h6>{mail}</h6>
          </div>
          <button
            className="text-blue-500 hover:underline"
            onClick={() => {
              setlog(!log);
            }}
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Profile;