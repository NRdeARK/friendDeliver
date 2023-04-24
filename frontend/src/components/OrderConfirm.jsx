import React, { useState, useId } from "react";
import useAuth from "../hooks/useAuth";

const CreateOrderForm = () => {
  // const [user, setUser] = useState("");
  const {auth} = useAuth()
  const [store, setStore] = useState("");
  const [amount, setAmt] = useState(1);
  const [errMsg, setErrMsg] = useState("");

  const handleSubmit = async (e) => {
    console.log(selectedTime);
    let data = JSON.stringify({
      orderId : 0,
      username: auth.user,
      menuname: store,
      amount: amount,
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

    fetch("http://localhost:5287/api/OrderConfirm/GetPost", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));

    };

    let option

    // function selectOrder(orderId)
    // {
    //     let item=orderId[orderId-1]
    //     setStatus(item.orderStatus)
    // }
    <tr>
        <td><button onClick={() => deleteOrder(item.orderId)}>cancal</button></td>
        <td><button onClick={() => ConFirmOrder(item.orderId)}>confirm</button></td>
    </tr>

  
 
};

export default CreateOrderForm;
