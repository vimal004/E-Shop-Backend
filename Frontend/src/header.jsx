import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import Button from "./Utilities/button";
import Profile from "./Utilities/profile";
import { Context } from "./App";
import "./index.css"; // Remove this line if not using custom styles

const Header = () => {
  const {
    mail,
    setmail,
    reg,
    setreg,
    r,
    setr,
    log,
    setlog,
    currmode,
    setmode,
    lgnmodal,
    setlgnmodal,
    lgntoggle,
    logfn,
    togglefunc,
    text,
    settext,
    search,
    setsearch,
    cart,
    setcart,
  } = useContext(Context);
  const [lgn, setlgn] = useState("Login");

  const lgtoggle = () => {
    setlgn(lgn === "Login" ? "Logout" : "Login");
  };

  return (
    <div
      className={`flex flex-col md:flex-row justify-between items-center p-6 shadow-lg ${
        currmode ? "bg-gray-800" : "bg-white"
      }`}
    >
      <Link to={"/"}>
        <div className="flex items-center space-x-4">
          <img
            aria-placeholder="Logo"
            className="h-12 w-12 rounded-full"
            src="https://static.vecteezy.com/system/resources/previews/016/471/452/original/abstract-modern-ecommerce-logo-ecommerce-logo-design-shop-logo-design-template-creative-ecommerce-logo-vector.jpg"
            alt="Logo"
          />
          <h1
            className={`text-2xl font-bold ${
              currmode ? "text-white" : "text-gray-800"
            }`}
          >
            E-Shop
          </h1>
        </div>
      </Link>
      <div className="flex-grow mt-4 md:mt-0 md:mx-10 w-full md:w-auto">
        <div
          className={`flex justify-center space-x-6 ${
            currmode ? "text-white" : "text-gray-700"
          }`}
        >
          <Link
            to={"/kitchen"}
            className="hover:text-blue-500 transition duration-300"
          >
            Kitchen
          </Link>
          <Link
            to={"/sports"}
            className="hover:text-blue-500 transition duration-300"
          >
            Sports
          </Link>
          <Link
            to={"/electronics"}
            className="hover:text-blue-500 transition duration-300"
          >
            Electronics
          </Link>
          <Link
            to={"/clothing"}
            className="hover:text-blue-500 transition duration-300"
          >
            Clothing
          </Link>
          <Link
            to={"/customerservice"}
            className="hover:text-blue-500 transition duration-300"
          >
            Customer Service
          </Link>
        </div>
      </div>
      <div className="flex items-center space-x-4 mt-4 md:mt-0 w-full md:w-auto">
        <Link to={"/cart"}>
          <Button name={"Cart"} mode={currmode} altname={"Cart"} />
        </Link>
        <input
          className="flex-grow md:w-80 px-4 py-2 border border-gray-300 rounded-full shadow focus:outline-none focus:border-blue-500 transition duration-300"
          placeholder="Search for products, brands and more"
          onChange={(e) => {
            settext(e.target.value);
            setsearch(e.target.value.length > 0);
          }}
        />
        <Button
          name={"Dark Mode"}
          action={togglefunc}
          mode={currmode}
          altname={"Light Mode"}
        />
        {log ? (
          <Profile />
        ) : (
          <Button name={lgn} mode={currmode} action={lgntoggle} altname={lgn} />
        )}
      </div>
    </div>
  );
};

export default Header;
