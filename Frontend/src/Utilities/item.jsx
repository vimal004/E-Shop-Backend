import React, { useState, useEffect, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { Context } from "../App";

const Item = () => {
  const { id } = useParams();
  const { currmode, mail } = useContext(Context);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [cart, setCart] = useState(false);
  const [inStock] = useState(true);
  const [reviews] = useState([
    { name: "Alice", rating: 5, comment: "Great product!" },
    { name: "Bob", rating: 4, comment: "Very good, but could be improved." },
  ]);

  useEffect(() => {
    axios
      .get("https://mern-project-backend-green.vercel.app/api/users/data")
      .then((res) => {
        const itemData = res.data.find((d) => d.product_name === id);
        if (itemData) {
          setData({ ...itemData, email: localStorage.getItem("email") });
        }
        setLoading(false);
      })
      .catch(() => {
        console.log("error fetching data");
        setLoading(false);
      });
  }, [id]);

  useEffect(() => {
    if (data) {
      axios
        .post(
          "https://mern-project-backend-green.vercel.app/api/users/itemexists",
          {
            email: data.email,
            product_name: data.product_name,
          }
        )
        .then((res) => {
          setCart(true);
        })
        .catch((error) => {
          setCart(false);
        });
    }
  }, [data]);

  const handleQtyChange = (event) => {
    const newQty = event.target.value;
    console.log(`Quantity of ${data.product_name} changed to ${newQty}`);
    data.qty = parseInt(newQty);
    axios.put("https://mern-project-backend-green.vercel.app/api/users/qty", {
      email: data.email,
      product_name: data.product_name,
      qty: data.qty,
    });
  };

  const handleAddToCart = () => {
    axios
      .post(
        "https://mern-project-backend-green.vercel.app/api/users/addcart",
        data
      )
      .then((res) => {
        setCart(true);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleDeleteCart = () => {
    axios
      .delete(
        "https://mern-project-backend-green.vercel.app/api/users/deletecart",
        {
          data: {
            email: data.email,
            product_name: data.product_name,
          },
        }
      )
      .then((res) => {
        console.log(data.email);
        console.log(data.product_name);
        setCart(false);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  if (loading) {
    return (
      <div
        className={`p-6 min-h-screen ${
          currmode ? "bg-gray-700 text-white" : "bg-white text-black"
        }`}
      >
        <div className="flex justify-center items-center h-full">
          <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full text-blue-500"></div>
          <span className="ml-2">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`p-6 ${
        currmode ? "bg-gray-700 text-white" : "bg-white text-black"
      }`}
    >
      <div className="flex flex-col md:flex-row md:justify-center md:items-center">
        <div className="md:w-1/2">
          <img
            className="w-70 h-70 object-cover rounded mx-8"
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
          <div className="flex gap-4 mb-6 items-center">
            <button
              className={`bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition ${
                currmode ? "hover:bg-blue-600" : "hover:bg-blue-700"
              }`}
              onClick={() => {
                cart ? handleDeleteCart() : handleAddToCart();
                console.log(cart);
              }}
            >
              {cart ? "Delete from Cart" : "Add to Cart"}
            </button>
            <Link
              to={"https://mern-project-frontend-lyart.vercel.app/checkout"}
            >
              <button
                className={`bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700 transition ${
                  currmode ? "hover:bg-green-600" : "hover:bg-green-700"
                }`}
                onClick={handleAddToCart}
              >
                Buy Now
              </button>
            </Link>
            <div
              className={`flex items-center ${
                currmode ? "text-white" : "text-black"
              }`}
            >
              <label className="mr-2">Quantity:</label>
              <select
                className={`bg-${
                  currmode ? "gray-800" : "white"
                } border border-${currmode ? "gray-600" : "gray-300"} text-${
                  currmode ? "white" : "black"
                } rounded`}
                defaultValue={data.qty || 1}
                onChange={handleQtyChange}
              >
                {[...Array(10).keys()].map((i) => (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                ))}
              </select>
            </div>
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
