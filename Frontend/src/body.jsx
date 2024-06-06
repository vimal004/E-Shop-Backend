import React, { useContext, useState, useEffect } from "react";
import clothingImage from "./Utilities/pexels-solliefoto-298863.jpg";
import Footer from "./footer";
import Card from "./Utilities/card";
import { Context } from "./App";
import ShimmerCard from "./Utilities/shimmercard";
import { Link } from "react-router-dom";

const Body = () => {
  const { currmode } = useContext(Context);
  const [shimmer, setShimmer] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShimmer(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`min-h-screen flex flex-col ${
        currmode ? "bg-gray-700" : "bg-white"
      }`}
    >
      <h1
        className={`text-center text-3xl font-bold mt-7 mb-4 ${
          currmode ? "text-white" : "text-black"
        }`}
      >
        Shop Now!
      </h1>
      <div className="flex-grow flex flex-wrap justify-center items-center gap-6 p-2 relative">
        <div
          className={`absolute inset-x-0 top-6 flex flex-wrap justify-center items-center gap-6 p-2 transition-opacity duration-500 ${
            shimmer ? "opacity-100" : "opacity-0"
          }`}
        >
          <ShimmerCard />
          <ShimmerCard />
          <ShimmerCard />
          <ShimmerCard />
        </div>
        <div
          className={`transition-opacity duration-500 ${
            shimmer ? "opacity-0" : "opacity-100"
          } flex flex-wrap justify-center items-center gap-6 p-2`}
        >
          <Link to={"clothing"}>
            <Card
              title="Clothing"
              description="Discover the latest trends in fashion."
              image={clothingImage}
              mode={currmode}
            />
          </Link>
          <Link to={"electronics"}>
            <Card
              title="Electronic Gadgets"
              description="Explore a wide range of electronic gadgets."
              image="https://img.freepik.com/free-photo/workplace-business-modern-male-accessories-laptop-white_155003-1722.jpg?size=626&ext=jpg&ga=GA1.1.44546679.1716336000&semt=ais_user"
              mode={currmode}
            />
          </Link>
          <Link to={"kitchen"}>
            <Card
              title="Kitchen"
              description="Find kitchen essentials and appliances."
              image="https://c1.wallpaperflare.com/preview/370/450/397/spoon-fork-knife-kitchen.jpg"
              mode={currmode}
            />
          </Link>
          <Link to={"sports"}>
            <Card
              title="Sport Kits"
              image="https://i.pinimg.com/originals/c4/c6/09/c4c60940da2d250e5472fe2fbf85f3e7.jpg"
              description="Get ready for your favorite sports activities."
              mode={currmode}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Body;
