import React, { useContext } from "react";
import { Context } from "../App";
import Card from "./card1";
import { Link } from "react-router-dom";
import mergedData from "./data";

const SearchBody = () => {
  const { text, currmode } = useContext(Context);
  const searchText = text.toLowerCase(); // Convert search text to lowercase

  // Filter products based on search text
  const filteredProducts = mergedData.filter(
    (d) =>
      d.id > 10 &&
      d.id < 21 &&
      d.product_name.toLowerCase().includes(searchText)
  );

  // Check if there are items found
  const hasItems = filteredProducts.length > 0;

  return (
    <div
      className={`min-h-screen flex flex-col ${
        currmode ? "bg-gray-700 text-white" : "bg-white text-black"
      }`}
    >
      <div className="container mx-auto px-4 py-8 mb-16 flex-grow">
        {/* Display number of items found */}
        <h1 className="text-3xl font-bold mb-8">
          {filteredProducts.length} Items Found
        </h1>
        {/* Display cards or message */}
        <div
          className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ${
            hasItems ? "" : "justify-center items-center"
          }`}
        >
          {/* Display cards if items found, otherwise show a message */}
          {hasItems ? (
            filteredProducts.map((d, index) => (
              <Link to={d.product_name} key={index}>
                <div className="rounded-none">
                  <Card
                    key={index}
                    name={d.product_name}
                    imageLink={d.image_link}
                    rating={d.rating}
                    price={d.price}
                    mode={currmode}
                  />
                </div>
              </Link>
            ))
          ) : (
            <div className="text-center text-xl">
              No items match your search.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchBody;
