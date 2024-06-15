import React, { useState, useEffect } from "react";
import SignedIn from "./signedin";
import axios from "axios";
import { useContext } from "react";
import { Context } from "../App";

const LoginModal = ({
  show,
  handleClose,
  currmode,
  toggleRegister,
  logfn,
  log,
}) => {
  const [transition, setTransition] = useState(false);
  const [sig, setsig] = useState(false);
  const { mail, setmail, times, settimes } = useContext(Context);

  useEffect(() => {
    setTransition(show);
  }, [show]);

  const handleModalClick = (e) => {
    e.stopPropagation();
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://mern-project-backend-green.vercel.app/api/users/login", {
        email,
        password,
      })
      .then(() => {
        logfn();
        setmail(email);
        localStorage.setItem("email", email);
        settimes(1);
      })
      .catch(() => {
        setsig(!sig);
      });
  };

  return log ? (
    times ? (
      <div>
        <SignedIn />
      </div>
    ) : (
      <div></div>
    )
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
          Sign in
        </h2>
        <form className="space-y-5" onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              name="username"
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
          {sig ? (
            <div className="text-red-500">
              <h6>Login Unsuccessful. Try Again.</h6>
            </div>
          ) : (
            <div></div>
          )}
          <button
            type="submit"
            className={`w-full ${
              currmode ? "bg-gray-600 text-white" : "bg-black text-white"
            } py-3 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50`}
          >
            Next
          </button>
        </form>
        <div className="mt-6 text-center">
          <a href="#" className="text-blue-500 hover:underline">
            Forgot email?
          </a>
        </div>
        <div className="mt-6 text-center text-gray-500">
          Not your computer? Use Guest mode to sign in privately.{" "}
          <a href="#" className="text-blue-500 hover:underline">
            Learn more
          </a>
        </div>
        <div className="mt-6 text-center">
          <a
            href="#"
            className="text-blue-500 hover:underline"
            onClick={toggleRegister}
          >
            Create account
          </a>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
