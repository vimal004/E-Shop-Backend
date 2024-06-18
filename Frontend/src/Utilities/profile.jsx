import React, { useState, useContext } from "react";
import { Context } from "../App";
import profileImage from "../assets/pfp.jfif"; // Adjust the path based on your file structure

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
        className="rounded-full w-10 h-10 cursor-pointer"
        src={profileImage}
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
            <h6>{localStorage.getItem("email")}</h6>
          </div>
          <button
            className="text-blue-500 hover:underline"
            onClick={() => {
              setlog(!log);
              localStorage.setItem("email", "");
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
