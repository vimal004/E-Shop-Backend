import { useParams } from "react-router-dom";
import dat from "./data";

const Item = () => {
  const val = useParams();
  const data = dat.find((d) => d.product_name === val.id);
  return (
    <div className="">
      <h1>{data.product_name}</h1>
      <h1>{data.price}</h1>
      <h1>{data.rating}</h1>
      <img src={data.image_link}></img>
    </div>
  );
};

export default Item;
