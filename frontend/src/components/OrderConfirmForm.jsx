import React, { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
useAuth;

const OrderConfirmForm = (data) => {
  const props = data.props;
  console.log(data);
  const { auth } = useAuth();
  const [status, setStatus] = useState(props.orderStatus);
  const [button, setButton] = useState(<></>)

  const handleConfirm = async (e) => {
    console.log();
    let data = JSON.stringify({
      orderId: props.orderId,
      logic: "ยืนยันออเดอร์",
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
      "http://localhost:5287/api/Order/status/".concat(props.orderId),
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
    setStatus("ยืนยันออเดอร์");
  };

  const handleCancel = async (e) => {
    console.log();
    let data = JSON.stringify({
      orderId: props.orderId,
      logic: "ยกเลิก",
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
      "http://localhost:5287/api/Order/status/".concat(props.orderId),
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
    setStatus("ยกเลิก");
  };

  const handleRecieved = async (e) => {
    console.log();
    let data = JSON.stringify({
      orderId: props.orderId,
      logic: "ได้รับแล้ว",
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
      "http://localhost:5287/api/Order/status/".concat(props.orderId),
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
    setStatus("ได้รับแล้ว");
  };

  useEffect(() => {
    setButton(
      <>
        {status != "รอยืนยัน" && status != "ยกเลิก" && status != "ได้รับแล้ว"? (
          auth.user == props.username && props.orderId != "ได้รับแล้ว" ? (
            <div className="flex justify-center">
              <button className="bg-green-400 rounded" onClick={handleRecieved}>
                Recieved
              </button>
            </div>
          ) : (
            <></>
          )
        ) : data.type != "owner" || status == "ยกเลิก" || status == "ได้รับแล้ว" ? (
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
      </>
    );
  }, [status]);

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
        <div>{props.orderStatus}</div>
        <br />
        {button}
      </div>
    </div>
  );
};

export default OrderConfirmForm;
