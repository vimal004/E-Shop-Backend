import React from "react";

const ShimmerCard = () => {
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg border border-gray-300 m-4 transform transition-transform duration-300 hover:scale-105 bg-white">
      <div className="animate-shimmer">
        <div className="shimmer-gradient h-40 w-full rounded-t-lg"></div>
        <div className="px-6 py-4">
          <div className="shimmer-gradient h-6 w-3/4 mb-4"></div>
          <div className="shimmer-gradient h-4 w-1/2"></div>
        </div>
      </div>
    </div>
  );
};

export default ShimmerCard;
