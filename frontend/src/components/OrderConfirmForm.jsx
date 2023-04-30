import React, { useState } from "react";
import useAuth from "../hooks/useAuth";
useAuth;

const OrderConfirmForm = (data) => {
  const props = data.props;
  console.log(data);
  const { auth } = useAuth();
  const [confirmed, setConfirmed] = useState(props.isConfirmed);

  const handleConfirm = async (e) => {
    console.log();
    let data = JSON.stringify({
      orderId: props.orderId,
      logic: "Confirmed",
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
    fetch(
      "http://localhost:5287/api/Order/confirmed/".concat(props.orderId),
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
    setConfirmed("Confirmed");
  };

  const handleCancel = async (e) => {
    console.log();
    let data = JSON.stringify({
      orderId: props.orderId,
      logic: "Cancled",
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
    fetch(
      "http://localhost:5287/api/Order/confirmed/".concat(props.orderId),
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
    setConfirmed("Cancled");
  };

  const handleRecieved = async (e) => {
    console.log();
    let data = JSON.stringify({
      orderId: props.orderId,
      logic: "Received",
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
    fetch(
      "http://localhost:5287/api/Order/received/".concat(props.orderId),
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
    setReceived("Received");
  };

  return (
    <div className=" bg-gray-200 accent-gray-300 rounded-lg">
      <div className="flex justify-center">
        <h2>
          {props.nickname}({props.realname}){" "}
        </h2>
        <br />
        <div>{props.menuname}</div>
        <div>จำนวน{props.amount}กล่อง</div>
        <div>{props.timeCreated}</div>
        <div>{confirmed}</div>
        <br />
      </div>
      {confirmed != "-" ? (
        (
          auth.user == props.username
          ?
          <div className="flex justify-center">
            <button className="bg-green-400 rounded" onClick={handleRecieved}>
              Recieved
            </button>
          </div>
        :
        <></>)
      ) : data.type != "owner" ? (
        <></>
      ) : (
        <>
          <div className="flex justify-center">
            <button className="bg-green-400 rounded" onClick={handleConfirm}>
              Confirm
            </button>
          </div>

          <div className="flex justify-center">
            <button className="bg-red-400 rounded" onClick={handleCancel}>
              cancel
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default OrderConfirmForm;
