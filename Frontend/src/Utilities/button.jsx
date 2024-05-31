import React from "react";

const Button = ({ name, action, mode, altname }) => {
  return (
    <div
      onClick={action}
      className={`flex items-center justify-center px-4 py-2 rounded-full hover:bg-gray-300 transition duration-300 transform hover:scale-105 ${
        mode ? "bg-white" : "bg-black"
      }`}
      style={{ minWidth: "100px", boxShadow: "0 2px 3px rgba(0,0,0,0.1)" }}
    >
      <button className="w-full" style={{ color: mode ? "black" : "white" }}>
        {mode ? altname : name}
      </button>
    </div>
  );
};

export default Button;
