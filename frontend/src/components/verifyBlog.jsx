import React, { useState } from "react";
import VerifyTicket from "./verifyTicket";
import OrderConfirm from "./OrderConfirmForm";
import useAuth from "../hooks/useAuth";
import { useEffect } from "react";
import axios from "../api/axios";
import OrderConfirmForm from "./OrderConfirmForm";
import OrderReceiveForm from "./OrderReceiveForm";

const ORDER_POSTID_URL = "Order/";

function VerifyBlog(data) {
  const props = data.data;
  console.log(props)
  let content;
  const { auth } = useAuth();
  const [orderList, setOrderList] = useState([]);

  useEffect(() => {
    Promise.all([axios.get(ORDER_POSTID_URL.concat(props.postId))])
      .then((response) => {
        // console.log(response[0].data);
        setOrderList(response[0].data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (auth.user == props.username) {
    

    content = (
      <div>
        <VerifyTicket props={data} type={"Selective"}></VerifyTicket>
        {orderList.map((data) => {
            return <OrderConfirmForm props={data}></OrderConfirmForm>;
          
        })}
      </div>
    );
  } else {
    content = (
      <div>
        <VerifyTicket props={data} type={"Other"}></VerifyTicket>
        {orderList.map((data) => {
          console.log(data)
          if(data.username == auth.user){
          return <OrderReceiveForm props={data}></OrderReceiveForm>;
          }
        })}
      </div>
    );
  }
  return <div>{content}</div>;
}

export default VerifyBlog;
