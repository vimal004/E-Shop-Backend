import React, { useState } from "react";
import { Outlet, createBrowserRouter } from "react-router-dom";
import About from "./Utilities/about";
import Header from "./header";
import Body from "./body"; // Assuming you have a Body component in this path
import Clothing from "./Utilities/clothing";

export const Context = React.createContext();

const App = () => {
  const [regi, setregi] = useState(false);
  const [r, setr] = useState(false);
  const [reg, setreg] = useState(false);
  const [currmode, setmode] = useState(false);

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
    ],
  },
]);

export default appRouter;
