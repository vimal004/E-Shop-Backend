import React, { useState, useEffect, useContext } from "react";
import Card from "./card1";
import ShimmerCard from "./shimmercard";
import { Link } from "react-router-dom";
import { Context } from "../App";
import SearchBody from "./searchbdy1";
import mergedData from "./data";

const Clothing = () => {
  const [shimmer, setShimmer] = useState(true);
  const data = mergedData.filter((d) => d.id > 10 && d.id < 21);
  const { currmode, search } = useContext(Context);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShimmer(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return search ? (
    <SearchBody />
  ) : (
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
        Clothing
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
          {data.map((d) => (
            <Link to={d.product_name} key={d.product_name}>
              <Card
                key={d.product_name}
                name={d.product_name}
                rating={d.rating}
                price={d.price}
                imageLink={d.image_link}
                mode={currmode}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Clothing;
