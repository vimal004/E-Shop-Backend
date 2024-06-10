import { Context } from "../App";
import { useContext } from "react";

const Checkout = () => {
  const { currmode } = useContext(Context);
  return (
    <div
      className={`min-h-screen flex flex-col ${
        currmode ? "bg-gray-700 text-white" : "bg-white text-black"
      }`}
    >
      <div className="text-center m-5 bold text-xl">
        <h1>Checkout</h1>
      </div>
    </div>
  );
};

export default Checkout;
