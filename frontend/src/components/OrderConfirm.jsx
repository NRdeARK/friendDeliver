import React, { useState, useId } from "react";
import useAuth from "../hooks/useAuth";

const CreateOrderConfirmForm = () => {
  // const [user, setUser] = useState("");
  const {auth} = useAuth()
  const [store, setStore] = useState("");
  const [amount, setAmt] = useState(1);
  const [errMsg, setErrMsg] = useState("");
  const [text, setText] = useState("");

  const handleConfirm = async (e) => {
    console.log(selectedTime);
    let data = JSON.stringify({
      orderId : auth.orderId,
      posttId :auth.posttId,
      username: auth.user,
      menuname: auth.menuname,
      amount: auth.amount,
    });
    
    console.log(data);

    var myHeaders = new Headers();
    myHeaders.append("Origin", "localhost:5173");
    myHeaders.append("Content-Type", "application/json");

    var requestOptions = {
      method: "PUT",
      headers: myHeaders,
      body: data,
      redirect: "follow",
    };
    fetch("http://localhost:5287/api/OrderConfirm/{id}confirm", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));

    };
    
    const handleCancel = async (e) => {
      console.log(selectedTime);
      let data = JSON.stringify({
        orderId : auth.orderId,
        posttId :auth.posttId,
        username: auth.user,
        menuname: auth.menuname,
        amount: auth.amount,
      });
      
      console.log(data);
  
      var myHeaders = new Headers();
      myHeaders.append("Origin", "localhost:5173");
      myHeaders.append("Content-Type", "application/json");
  
      var requestOptions = {
        method: "PUT",
        headers: myHeaders,
        body: data,
        redirect: "follow",
      };
      fetch("http://localhost:5287/api/OrderConfirm/{id}cancel", requestOptions)
        .then((response) => response.text())
        .then((result) => console.log(result))
        .catch((error) => console.log("error", error));
  
      };
    return (
      <div className="flex flex-col justify-stretch flex-nowrap h-[200px]  bg-gray-200 accent-gray-300 rounded-lg w-full">
        <div>
        {/* <input type="text" value={"confirm"} onChange={(e) => setText(e.target.value)} /> */}
        <button onClick={handleConfirm}>Confirm</button>
        </div>
        <div>
        {/* <input type="text" value={"cancel"} onChange={(e) => setText(e.target.value)} /> */}
        <button onClick={handleCancel}>cancel</button>
        </div>
      </div>
    )

    
};

export default CreateOrderConfirmForm;
