import React from "react";
import { useState, useEffect } from "react";
import axios from "../api/axios";
import Tickets from "./ticketOrder";
const ORDER_URL = "/Order";

function OrderTicket() {
  const [Orders, setOrders] = useState(<></>);
  function getUserName(item, i) {
    console.log(i);
    return (
      <div key={i} className="flex flex-row justify-around items-center border-t-[1px] border-b-[1px] border-gray-600 p-3">
        {Tickets(item)}
      </div>
    );
  }
  useEffect(() => {
    Promise.all([axios.get(ORDER_URL)])
      .then((response) => {
        console.log(response[0].data);
        setOrders(response[0].data.map(getUserName));
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return <div class='w-3/5 h-20 flex flex-col items-center   bg-gray-200 rounded-md'>{Orders}</div>;
}

export default OrderTicket;
