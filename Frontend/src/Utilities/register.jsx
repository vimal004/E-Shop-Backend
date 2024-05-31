import React, { useState, useEffect, useContext } from "react";
import { Context } from "../App";
import axios from "axios";
import Registered from "./registered";

const RegisterModal = ({
  show,
  handleClose,
  currmode,
  toggleRegister,
  logged,
}) => {
  const [transition, setTransition] = useState(false);
  const { reg, setreg, r, setr, regi, setregi } = useContext(Context);
  useEffect(() => {
    setTransition(show);
  }, [show]);

  const handleModalClick = (e) => {
    e.stopPropagation();
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    axios
      .post("http://localhost:3000/api/users/register", { email, password })
      .then(() => {
        setr(!r);
        setreg(!reg);
        setregi(!regi);
      })
      .catch(() => {
        setregi(!regi);
      });
  };

  return reg ? (
    <div></div>
  ) : (
    <div
      className={`fixed inset-0 flex items-center justify-center transition-opacity duration-500 ${
        transition ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      onClick={handleClose}
    >
      <div
        className={`absolute inset-0 ${currmode ? "bg-gray-800" : "bg-white"} ${
          currmode ? "bg-opacity-75" : "bg-opacity-50"
        }`}
      />
      <div
        className={`bg-white ${
          currmode ? "text-gray-700" : "text-gray-700"
        } p-8 rounded-lg shadow-lg max-w-md relative transform transition-transform duration-500 ${
          transition ? "scale-100" : "scale-95"
        }`}
        onClick={handleModalClick}
      >
        <button
          className={`absolute top-3 right-3 ${
            currmode
              ? "text-gray-400 hover:text-gray-200"
              : "text-gray-600 hover:text-gray-800"
          }`}
          onClick={handleClose}
        >
          &times;
        </button>
        <h2
          className={`text-3xl font-bold ${
            currmode ? "text-gray-600" : "text-gray-700"
          } mb-6 text-center`}
        >
          Create Account
        </h2>
        <form className="space-y-5" onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              name="email"
              placeholder="Email"
              className={`w-full p-3 border ${
                currmode ? "border-gray-600" : "border-gray-300"
              } rounded focus:outline-none focus:border-blue-500`}
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <input
              type="password"
              name="password"
              placeholder="Password"
              className={`w-full p-3 border ${
                currmode ? "border-gray-600" : "border-gray-300"
              } rounded focus:outline-none focus:border-blue-500`}
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              className={`w-full p-3 border ${
                currmode ? "border-gray-600" : "border-gray-300"
              } rounded focus:outline-none focus:border-blue-500`}
              required
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          {regi ? (
            <div className="text-red-500">
              <h6>Registration Unsuccessful. Try Again.</h6>
            </div>
          ) : (
            <div className=""></div>
          )}
          <button
            type="submit"
            className={`w-full ${
              currmode ? "bg-gray-600 text-white" : "bg-black text-white"
            } py-3 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50`}
          >
            Register
          </button>
        </form>
        <div className="mt-6 text-center">
          <a
            href="#"
            className="text-blue-500 hover:underline"
            onClick={toggleRegister}
          >
            Already have an account? Sign in
          </a>
        </div>
      </div>
    </div>
  );
};

export default RegisterModal;
