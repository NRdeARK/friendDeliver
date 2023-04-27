import React from "react";
import { useState, useEffect } from "react";
import axios from "../api/axios";
import BlogOrder from "./BlogOrder";
import useAuth from "../hooks/useAuth";

const Order_URL = "/Order";

function OrderBlog(postId) {
  const { toggleUpdateOrder } = useAuth();
  const [Orders, setOrders] = useState(<></>);
  const [isOrder, setIsOrder] = useState(false);
  const [isHover, setIsHover] = useState(false);
  function getBlogOrder(item, i) {
    console.log(i);
    return (
      <div
        key={i}
        className="bg-gray-200 mb-16 p-10 rounded-3xl drop-shadow-md w-7/12"
      >
        {item.username}
        {BlogOrder(item)}
      </div>
    );
  }
  useEffect(
    () => {
      Promise.all([axios.get(Order_URL)])
        .then((response) => {
          if (Object.keys(response[0].data).length <= 0) {
            setOrders(<></>);
            setIsOrder(false);
          } else if (Object.keys(response[0].data).length == 1) {
            setOrders(
              <div className="flex justify-center">
                <div
                  key={0}
                  className="bg-gray-200 mb-16 p-10 rounded-3xl drop-shadow-md w-7/12"
                >
                  {BlogOrder(response[0].data[0])}
                </div>
              </div>
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
      {isOrder ? (
        <div
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
        >
          {isHover ? (
            Orders
          ) : (
            <div
              className="bg-gray-200 mb-16 p-10 rounded-3xl drop-shadow-md w-40 text-center"
            >
              order
            </div>
          )}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default OrderBlog;
