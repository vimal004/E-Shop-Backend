import React, { useContext } from "react";
import { Context } from "../App";
import Card from "./card1";
import dat from "./data";

const SearchBody = () => {
  const { text } = useContext(Context);
  const searchText = text.toLowerCase(); // Convert search text to lowercase
  const filteredProducts = dat.filter(d => d.product_name.toLowerCase().includes(searchText));

  return (
    <div className="container mx-auto px-4 py-8 mb-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredProducts.map((d, index) => (
          <Card
            key={index}
            name={d.product_name}
            imageLink={d.image_link}
            rating={d.rating}
            price={d.price}
          />
        ))}
      </div>
    </div>
  );
};

export default SearchBody;


