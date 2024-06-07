import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import mergedData from "./data";
import { Context } from "../App";
import axios from "axios";

const Item = () => {
  const { id } = useParams();
  const data = mergedData.find((d) => d.product_name === id);
  const { currmode, mail } = useContext(Context);
  data.email = localStorage.getItem("email");
  const [cart, setcart] = useState(false);

  // Mock data for stock status and reviews
  const [inStock] = useState(true);
  const [reviews] = useState([
    { name: "Alice", rating: 5, comment: "Great product!" },
    { name: "Bob", rating: 4, comment: "Very good, but could be improved." },
  ]);

  const Exists = () => {
    axios
      .post("http://localhost:3000/api/users/itemexists", {
        email: data.email,
        product_name: data.product_name,
      })
      .then((res) => {
        setcart(true);
      })
      .catch((error) => {
        setcart(false);
      });
  };

  Exists();

  const handleAddToCart = () => {
    axios
      .post("http://localhost:3000/api/users/addcart", data)
      .then((res) => {
        setcart(true);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleDeleteCart = () => {
    try {
      axios
        .delete("http://localhost:3000/api/users/deletecart", {
          email: mail,
          product_name: data.product_name,
        })
        .then((res) => {
          console.log(res);
          setcart(false);
        });
    } catch {
      console.log("error");
    }
  };

  const handleBuyNow = () => {
    // Buy now logic
    alert(`Proceeding to buy ${data.product_name}!`);
  };

  return (
    <div
      className={`p-6 ${
        currmode ? "bg-gray-700 text-white" : "bg-white text-black"
      }`}
    >
      <div className="flex flex-col md:flex-row md:justify-center md:items-center">
        <div className="md:w-1/2">
          <img
            className="w-100 h-100 object-cover rounded mx-8"
            src={data.image_link}
            alt={data.product_name}
          />
        </div>
        <div className="md:w-1/2 md:pl-6 m-8">
          <h1 className="text-3xl font-bold mb-4">{data.product_name}</h1>
          <h2 className="text-xl text-gray-700 mb-4">{data.price}</h2>
          <h3
            className={`text-lg ${
              currmode ? "text-yellow-400" : "text-yellow-500"
            } mb-4`}
          >
            Rating: {data.rating} / 5
          </h3>
          <p className="mb-6">Features:</p>
          <ul className="list-disc list-inside mb-6">
            {data.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
          <div className="mb-6">
            {inStock ? (
              <span className="text-green-500">In Stock</span>
            ) : (
              <span className="text-red-500">Out of Stock</span>
            )}
          </div>
          <div className="flex gap-4 mb-6">
            <button
              className={`bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition ${
                currmode ? "hover:bg-blue-600" : "hover:bg-blue-700"
              }`}
              onClick={() => {
                cart ? handleDeleteCart() : handleAddToCart();
              }}
            >
              {cart ? "Delete from Cart" : "Add to Cart"}
            </button>
            <button
              className={`bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700 transition ${
                currmode ? "hover:bg-green-600" : "hover:bg-green-700"
              }`}
              onClick={handleBuyNow}
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
      <div className="mt-8">
        <h2
          className={`text-2xl font-bold mb-4 ${
            currmode ? "text-white" : "text-black"
          }`}
        >
          Customer Reviews
        </h2>
        {reviews.length > 0 ? (
          reviews.map((review, index) => (
            <div
              key={index}
              className={`mb-4 p-4 border rounded ${
                currmode ? "border-gray-600" : "border-gray-300"
              }`}
            >
              <h3 className="text-lg font-semibold">{review.name}</h3>
              <p
                className={`text-yellow-500 ${
                  currmode ? "text-yellow-400" : "text-yellow-500"
                }`}
              >
                Rating: {review.rating} / 5
              </p>
              <p>{review.comment}</p>
            </div>
          ))
        ) : (
          <p>No reviews yet.</p>
        )}
      </div>
    </div>
  );
};

export default Item;
