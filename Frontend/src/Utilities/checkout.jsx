import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import { Context } from "../App";
import Card from "./card1";
import ShimmerCard from "./shimmercard"; // Make sure to import ShimmerCard

const Checkout = () => {
  const { currmode, email } = useContext(Context);
  const [data, setData] = useState([]);
  const [address, setAddress] = useState("");
  const [shimmer, setShimmer] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShimmer(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submit button clicked");

    axios
      .put("http://localhost:3000/api/users/address", {
        email: localStorage.getItem("email"),
        address: address,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    axios
      .post("http://localhost:3000/api/users/getcart", {
        email: localStorage.getItem("email"),
      })
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [email]);

  return (
    <div
      className={`min-h-screen flex flex-col ${
        currmode ? "bg-gray-700" : "bg-white"
      }`}
    >
      <div className="flex justify-between items-center px-4 mt-7 mb-4">
        <div className="flex-1 flex justify-center items-center">
          <h1
            className={`text-3xl font-bold ${
              currmode ? "text-white" : "text-black"
            }`}
          >
            Checkout
          </h1>
        </div>
      </div>
      <div className="flex-grow flex flex-col items-center gap-4 p-2">
        <h5
          className={`text-lg mb-2 ${currmode ? "text-white" : "text-black"}`}
        >
          Deliver to:
        </h5>
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-lg flex flex-col items-center"
        >
          <input
            type="text"
            className="p-4 w-full h-20 mb-4 text-black rounded-lg text-xl"
            placeholder="Enter your delivery address"
            onChange={(e) => setAddress(e.target.value)}
          />
          <button
            type="submit"
            className="p-2 w-1/2 text-center bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition duration-300 text-lg"
          >
            Submit
          </button>
        </form>
        <div className="flex flex-wrap justify-center items-center gap-6 p-2 w-full">
          {shimmer ? (
            <>
              <ShimmerCard />
              <ShimmerCard />
              <ShimmerCard />
              <ShimmerCard />
            </>
          ) : (
            data.map((d, index) => (
              <Card
                key={index}
                name={d.product_name}
                rating={d.rating}
                price={d.price}
                imageLink={d.image_link}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Checkout;
