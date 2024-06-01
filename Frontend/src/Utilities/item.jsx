import { useParams } from "react-router-dom";
import dat from "./data";
import { useState } from "react";

const Item = () => {
  const { id } = useParams();
  const data = dat.find((d) => d.product_name === id);
  const [inStock, setInStock] = useState(true); // Replace with actual stock check logic
  const [reviews, setReviews] = useState([
    { name: "Alice", rating: 5, comment: "Great product!" },
    { name: "Bob", rating: 4, comment: "Very good, but could be improved." },
  ]);

  const handleAddToCart = () => {
    // Add to cart logic
    alert(`${data.product_name} added to cart!`);
  };

  const handleBuyNow = () => {
    // Buy now logic
    alert(`Proceeding to buy ${data.product_name}!`);
  };

  return (
    <div className="p-6">
      <div className="flex flex-col md:flex-row md:justify-center md:items-center">
        <div className="md:w-1/2">
          <img className="w-100 h-100 object-cover rounded mx-8" src={data.image_link} alt={data.product_name} />
        </div>
        <div className="md:w-1/2 md:pl-6">
          <h1 className="text-3xl font-bold mb-4">{data.product_name}</h1>
          <h2 className="text-xl text-gray-700 mb-4">{data.price}</h2>
          <h3 className="text-lg text-yellow-500 mb-4">Rating: {data.rating} / 5</h3>
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
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
              onClick={handleAddToCart}
            >
              Add to Cart
            </button>
            <button
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700 transition"
              onClick={handleBuyNow}
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Customer Reviews</h2>
        {reviews.length > 0 ? (
          reviews.map((review, index) => (
            <div key={index} className="mb-4 p-4 border rounded">
              <h3 className="text-lg font-semibold">{review.name}</h3>
              <p className="text-yellow-500">Rating: {review.rating} / 5</p>
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
