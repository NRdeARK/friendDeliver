import React from "react";
import { useState, useEffect } from "react";
import axios from "../api/axios";
import BlogOrder from "./BlogOrder";
const Order_URL = "/Order";

function OrderBlog() {
  const [Orders, setOrders] = useState(<></>);
  function getBlogOrder(item, i) {
    console.log(i);
    return (
      <div key={i} className="border-solid border-2 border-indigo-600">
        {item.username}
        {BlogOrder(item)}
      </div>
    );
  }
  useEffect(() => {
    Promise.all([axios.get(Order_URL)])
      .then((response) => {
        console.log(response[0].data);
        console.log(response[0].data[1]["username"]);
        setOrders(response[0].data.map(getBlogOrder));
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return <div>{Orders}</div>;
}

export default OrderBlog;