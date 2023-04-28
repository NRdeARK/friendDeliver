import React from "react";
import { useState, useEffect } from "react";
import axios from "../api/axios";
import BlogOrder from "./BlogOrder";
import useAuth from "../hooks/useAuth";

const Order_URL = "/Order/";

function OrderBlog(props) {
  const { toggleUpdateOrder } = useAuth();
  const [Orders, setOrders] = useState(<></>);
  const [isOrder, setIsOrder] = useState(false);

  function getBlogOrder(item, i) {
    // console.log(i);
    // console.log(item);
    return (
      <div className="flex justify-center" key={i}>
        <div className="bg-gray-200 mb-16 p-10 rounded-3xl drop-shadow-md w-7/12">
          {BlogOrder(item)}
        </div>
      </div>
    );
  }

  useEffect(
    () => {
      // console.log(Order_URL + props.postId);
      Promise.all([axios.get(Order_URL + props.postId.toString())])
        .then((response) => {
          // console.log(response);
          if (Object.keys(response[0].data).length <= 0) {
            setOrders(<></>);
            setIsOrder(false);
          } else if (Object.keys(response[0].data).length == 1) {
            setOrders(
              <li>
                <div className="flex justify-center">
                  <div
                    key={0}
                    className="bg-gray-200 mb-16 p-10 rounded-3xl drop-shadow-md w-7/12"
                  >
                    {BlogOrder(response[0].data[0])}
                  </div>
                </div>
              </li>
            );
            setIsOrder(true);
          } else {
            setOrders(response[0].data.map(getBlogOrder));
            setIsOrder(true);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    [toggleUpdateOrder],
    []
  );

  return (
    <div>
      {isOrder ? <ul className="ease-in duration-500">{Orders}</ul> : <></>}
    </div>
  );
}

export default OrderBlog;
