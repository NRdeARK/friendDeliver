import React, { useState } from "react";
import VerifyTicket from "./verifyTicket";
import useAuth from "../hooks/useAuth";
import { useEffect } from "react";
import axios from "../api/axios";
import OrderConfirmForm from "./OrderConfirmForm";

const ORDER_POSTID_URL = "Order/";

function VerifyBlog(data) {
  const props = data.data;
  // console.log(data);
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
      <div
      className= {props.status == "ส่งเรียบร้อย" ? "hidden" : "visible"} 
      >
        <VerifyTicket props={data} type={"Selective"}></VerifyTicket>
        {orderList.map((item) => {
          if (props.username == item.username)
            return (
              <OrderConfirmForm type={"owner"} props={item}></OrderConfirmForm>
            );
          else
            return (
              <OrderConfirmForm type={"rider"} props={item}></OrderConfirmForm>
            );
        })}
      </div>
    );
  } else {
    content = (
      <div>
        <VerifyTicket props={data} type={"Other"}></VerifyTicket>
        {orderList.map((item) => {
          return (
            <OrderConfirmForm type={"other"} props={item}></OrderConfirmForm>
          );
          // if(data.username == auth.user){
          // // return <OrderReceiveForm props={data}></OrderReceiveForm>;
          // }
        })}
      </div>
    );
  }
  return <div>{content}</div>;
}

export default VerifyBlog;
