import React from "react";

const SearchBody = () => {
  return (
    <div className="container mx-auto px-4 py-8 mb-16">
      {" "}
      {/* Increased bottom margin */}
      <h1 className="text-3xl font-bold mb-6">10 items found</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <img
            src="item1.jpg"
            alt="Item 1"
            className="w-full h-48 object-cover object-center"
          />
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-2">Item 1</h2>
            <p className="text-gray-700">Description of item 1...</p>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <img
            src="item2.jpg"
            alt="Item 2"
            className="w-full h-48 object-cover object-center"
          />
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-2">Item 2</h2>
            <p className="text-gray-700">Description of item 2...</p>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <img
            src="item3.jpg"
            alt="Item 3"
            className="w-full h-48 object-cover object-center"
          />
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-2">Item 3</h2>
            <p className="text-gray-700">Description of item 3...</p>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <img
            src="item3.jpg"
            alt="Item 3"
            className="w-full h-48 object-cover object-center"
          />
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-2">Item 3</h2>
            <p className="text-gray-700">Description of item 3...</p>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <img
            src="item3.jpg"
            alt="Item 3"
            className="w-full h-48 object-cover object-center"
          />
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-2">Item 3</h2>
            <p className="text-gray-700">Description of item 3...</p>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <img
            src="item3.jpg"
            alt="Item 3"
            className="w-full h-48 object-cover object-center"
          />
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-2">Item 3</h2>
            <p className="text-gray-700">Description of item 3...</p>
          </div>
        </div>
        {/* Add more search items as needed */}
      </div>
    </div>
  );
};

export default SearchBody;
