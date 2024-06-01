import React from "react";

const Card = ({ name, imageLink, rating, price, mode }) => {
  return (
    <div
      className={`w-80 rounded-lg overflow-hidden shadow-lg border border-gray-300 transform transition-transform duration-300 hover:scale-105 ${
        mode ? "bg-gray-800" : "bg-white"
      } ${mode ? "hover:shadow-2xl" : ""} mb-6`}
    >
      <img className="w-full h-48 object-cover" src={imageLink} alt={name} />
      <div className={`px-6 py-4 ${mode ? "text-white" : "text-gray-800"}`}>
        <div
          className={`font-bold text-xl mb-2 ${
            mode ? "text-white" : "text-gray-800"
          } hover:text-gray-400 cursor-pointer`}
        >
          {name}
        </div>
        <p className={`text-base ${mode ? "text-gray-300" : "text-gray-700"}`}>
          Rating: {rating}
        </p>
        <p className={`text-base ${mode ? "text-gray-300" : "text-gray-700"}`}>
          Price: {price}
        </p>
      </div>
      <div
        className={`bg-gradient-to-t ${
          mode ? "from-gray-800 to-transparent" : "from-white to-transparent"
        } py-2 px-4`}
      ></div>
    </div>
  );
};

export default Card;
