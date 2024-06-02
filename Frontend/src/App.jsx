import React, { useState, useEffect } from "react";
import { Outlet, createBrowserRouter } from "react-router-dom";
import About from "./Utilities/about";
import Header from "./header";
import Body from "./body"; // Assuming you have a Body component in this path
import Clothing from "./Utilities/clothing";
import Electronics from "./Utilities/electronics";
import Cart from "./Utilities/cart.jsx";
import Item from "./Utilities/item.jsx";
import Item1 from "./Utilities/item1.jsx";
import CustomerService from "./Utilities/cs.jsx";

export const Context = React.createContext();

const App = () => {
  const [regi, setregi] = useState(false);
  const [r, setr] = useState(false);
  const [reg, setreg] = useState(false);
  const [currmode, setmode] = useState(() => {
    return localStorage.getItem('currmode') === 'true';
  });

   useEffect(() => {
    localStorage.setItem('currmode', currmode);
  }, [currmode]);

  const togglefunc = () => {
    setmode(!currmode);
  };

  const [lgnmodal, setlgnmodal] = useState(false);
  const lgntoggle = () => {
    setlgnmodal(!lgnmodal);
  };

  const [log, setlog] = useState(false);
  const logfn = () => {
    setlog(!log);
  };

  const [mail, setmail] = useState("");

  const values = {
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
    regi,
    setregi,
  };

  return (
    <Context.Provider value={values}>
      <div className="">
        <Header />
        <Outlet />
      </div>
    </Context.Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Body />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "clothing",
        element: <Clothing />,
      },
      {
        path: "electronics",
        element: <Electronics />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "electronics/:id",
        element: <Item />,
      },
      {
        path: "clothing/:id",
        element: <Item1 />,
      },
      {
        path: "customerservice",
        element: <CustomerService />,
      },
    ],
  },
]);

export default appRouter;
