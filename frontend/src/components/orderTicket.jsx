import React from "react";
import { useState, useEffect } from "react";
import axios from "../api/axios";
import Tickets from "./tickets";
const ORDER_URL = "/Order";

function OrderTicket() {
  const [Orders, setOrders] = useState(<></>);
  const [isOrders,setIsOrder] = useState(false);
  function getUserName(item, i) {
    // console.log(i);
    return (
      <div
        key={i}
        className="flex flex-row justify-around items-center border-t-[1px] border-b-[1px] border-gray-600 p-3"
      >
        {Tickets(item)}
      </div>
    );
  }
  useEffect(() => {
    Promise.all([axios.get(ORDER_URL)])
      .then((response) => {
        // console.log(response[0].data);
        // console.log(typeof response[0].data);
        // console.log(Object.keys(response[0].data).length == 0)
        if (Object.keys(response[0].data).length == 0) {
          setOrders(<></>);
          setIsOrder(false);
        } else {
          setOrders(response[0].data.map(getUserName));
          setIsOrder(true);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return ( isOrders ? (
    <div className="w-3/5 flex flex-col items-center   bg-gray-200 rounded-md">
      {Orders}
    </div>
    
  ) : (
    <>
    ไม่มีรายการ
    </>
  ));
}

export default OrderTicket;
