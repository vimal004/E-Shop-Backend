import React from "react";

const Card = ({ title, description, image, mode }) => {
  return (
    <div
      className={`max-w-sm rounded-lg overflow-hidden shadow-lg border border-gray-300 m-4 transform transition-transform duration-300 hover:scale-105 ${
        mode ? "bg-gray-800" : "bg-white"
      } ${mode ? "hover:shadow-2xl" : ""}`}
    >
      <img className="w-full" src={image} alt={title} />
      <div className={`px-6 py-4 ${mode ? "text-white" : "text-gray-800"}`}>
        <div
          className={`font-bold text-xl mb-2 ${
            mode ? "text-white" : "text-gray-800"
          } hover:text-gray-400 cursor-pointer`}
        >
          {title}
        </div>
        <p className={`text-base ${mode ? "text-gray-300" : "text-gray-700"}`}>
          {description}
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
