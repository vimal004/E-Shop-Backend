import { useEffect, useState } from "react";

const Electronics = () => {
  const [data, setdata] = useState({});

  const fetchdata = async () => {
    const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.89960&lng=80.22090&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const jsondata = await response.json();
    console.log("Fetched data:", jsondata);
    setdata(jsondata?.cards[0] || []);
  };

  useEffect(() => {
    fetchdata();
  }, []);

  useEffect(() => {
    console.log("Updated data:", data);
  }, [data]);

  return (
    <div className="">
      <h1>Electronics</h1>
    </div>
  );
};

export default Electronics;