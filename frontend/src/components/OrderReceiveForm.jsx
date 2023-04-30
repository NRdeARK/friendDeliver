import React, { useState } from "react";

const OrderReceiveForm = (data) => {
  const props = data.props;
  console.log(data);
  const [received, setReceived] = useState(props.isReceived);

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
        <div>{received}</div>
        <br />
      </div>
      {received != "" && props.isConfirmed == "Confirmed" ? (
        <></>
      ) : (
        props.isConfirmed != "Confirmed" ?
        <></>
        :
        
        <>
          <div className="flex justify-center">
            <button className="bg-green-400 rounded" onClick={handleRecieved}>
              Recieved
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default OrderReceiveForm;
