import React, { useState, useEffect, useContext } from "react";
import Card from "./card1";
import { Context } from "../App";
import ShimmerCard from "./shimmercard";
import { Link } from "react-router-dom";
import SearchBody from "./searchbdy";
import axios from "axios";

const Kitchen = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_API_URL + "/api/users/data")
      .then((res) => {
        setData(res?.data);
        setShimmer(false);
      })
      .catch(() => {
        console.log("error fetching data");
      });
  }, []);

  useEffect(() => {
    console.log(data);
  }, [data]);

  const [shimmer, setShimmer] = useState(true);
  const { currmode, search } = useContext(Context);

  return search ? (
    <div>
      <SearchBody data={data} />
    </div>
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
        Kitchen
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
          {data.map(
            (d) =>
              d.category === "kitchen" && (
                <Link to={d.product_name} key={d.id}>
                  <Card
                    key={d.product_name}
                    name={d.product_name}
                    rating={d.rating}
                    price={d.price}
                    imageLink={d.image_link}
                    mode={currmode}
                  />
                </Link>
              )
          )}
        </div>
      </div>
    </div>
  );
};

export default Kitchen;
