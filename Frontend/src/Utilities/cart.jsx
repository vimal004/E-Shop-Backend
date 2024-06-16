import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import Card from "./card1";
import { Context } from "../App";
import { Link, useNavigate } from "react-router-dom";
import Button from "./button";

const Cart = () => {
  const [shimmer, setShimmer] = useState(true);
  const [data, setData] = useState([]);
  const email = localStorage.getItem("email");
  const [mail, setEmail] = useState("");
  const { currmode, search } = useContext(Context);
  //process.env.REACT_APP_API_URL + "/api/users/data"
  const handledelete = () => {
    axios
      .delete(
        "https://mern-project-backend-green.vercel.app/api/users/deleteall",
        {
          email: mail,
        }
      )
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    if (email !== "") {
      setEmail(email);
      axios
        .post(
          "https://mern-project-backend-green.vercel.app/api/users/getcart",
          { email }
        )
        .then((res) => {
          setData(res.data);
          setShimmer(false);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      console.log("no email");
      setEmail("");
    }
  }, [email, data]);

  return mail === "" ? (
    <div
      className={`min-h-screen flex flex-col ${
        currmode ? "bg-gray-700 text-white" : "bg-white text-black"
      }`}
    >
      <div className="text-center bold m-8">
        <h1>Sign in to add items to the cart.</h1>
      </div>
    </div>
  ) : (
    <div
      className={`min-h-screen flex flex-col ${
        currmode ? "bg-gray-700" : "bg-white"
      }`}
    >
      <div className="flex justify-between items-center px-4 mt-7 mb-4">
        <div className="flex-1 flex justify-center items-center">
          {" "}
          {/* Centering container */}
          <h1
            className={`text-3xl font-bold ${
              currmode ? "text-white" : "text-black"
            }`}
          >
            Cart Items
          </h1>
        </div>
        <div className="flex space-x-4 m-5">
          {" "}
          {/* Added mt-20 for 5cm margin */}
          <button
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            onClick={handledelete}
          >
            Clear Cart
          </button>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            onClick={() => navigate("/checkout")}
          >
            Proceed to checkout
          </button>
        </div>
      </div>

      <div className="flex-grow flex flex-wrap justify-center items-center gap-6 p-2 relative">
        {data.length === 0 && (
          <div className="text-center text-2xl font-bold mb-4">
            <h1 className={currmode ? "text-white" : "text-black"}>
              Cart is empty
            </h1>
          </div>
        )}
        <div
          className={`absolute inset-x-0 top-6 flex flex-wrap justify-center items-center gap-6 p-2 transition-opacity duration-500 ${
            shimmer ? "opacity-100" : "opacity-0"
          }`}
        ></div>
        <div
          className={`transition-opacity duration-500 ${
            shimmer ? "opacity-0" : "opacity-100"
          } flex flex-wrap justify-center items-center gap-6 p-2`}
        >
          {data.map((d, index) => (
            <Link
              key={index}
              to={`https://mern-project-frontend-lyart.vercel.app/cart/${d.product_name}`}
            >
              <Card
                key={index}
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

export default Cart;
