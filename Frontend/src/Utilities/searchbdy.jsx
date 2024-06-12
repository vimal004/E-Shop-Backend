import React, { useContext } from "react";
import { Context } from "../App";
import Card from "./card1";
import { Link } from "react-router-dom";

const SearchBody = ({ data }) => {
  const { text, currmode } = useContext(Context);
  const searchText = text.toLowerCase(); // Convert search text to lowercase
  const filteredProducts = data.filter((d) =>
    d.product_name.toLowerCase().includes(searchText)
  );

  const hasItems = filteredProducts.length > 0;

  return (
    <div
      className={`min-h-screen flex flex-col ${
        currmode ? "bg-gray-700 text-white" : "bg-white text-black"
      }`}
    >
      <div className="container mx-auto px-4 py-8 mb-16 flex-grow">
        <h1 className="text-3xl font-bold mb-8">
          {filteredProducts.length} Items Found
        </h1>
        <div
          className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ${
            hasItems ? "" : "justify-center items-center"
          }`}
        >
          {hasItems ? (
            filteredProducts.map((d, index) => (
              <Link to={d.product_name} key={index}>
                <Card
                  key={index}
                  name={d.product_name}
                  imageLink={d.image_link}
                  rating={d.rating}
                  price={d.price}
                  mode={currmode}
                />
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
