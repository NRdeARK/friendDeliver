import React, { useState } from "react";
import VerifyTicket from "./verifyTicket";
import useAuth from "../hooks/useAuth";
import { useEffect } from "react";
import axios from "../api/axios";
import OrderConfirmForm from "./OrderConfirmForm";

const ORDER_POSTID_URL = "Order/";

function VerifyBlog(data) {
  const props = data.data;
  console.log(data);
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
      <div className="">
        
        <VerifyTicket props={data} type={"Selective"}></VerifyTicket>
        {orderList.map((item) => {
          if (props.username == item.username)
            return (
              
                <div className="flex justify-center ">  <OrderConfirmForm type={"owner"} props={item}></OrderConfirmForm></div>
            );
          else
            return (
              <div className="flex justify-center"> <OrderConfirmForm type={"other"} props={item}></OrderConfirmForm></div>
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
            <div className="flex justify-center"><OrderConfirmForm type={"other"} props={item}></OrderConfirmForm></div>
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
