import React, { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
useAuth;

const OrderConfirmForm = (data) => {
  const props = data.props;
  // console.log(data);
  const { auth } = useAuth();
  const [status, setStatus] = useState(props.orderStatus);
  const [button, setButton] = useState(<></>);

  const handleConfirm = async (e) => {
    // console.log();
    let data = JSON.stringify({
      orderId: props.orderId,
      logic: "ยืนยันออเดอร์",
    });

    // console.log(data);

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
    // console.log();
    let data = JSON.stringify({
      orderId: props.orderId,
      logic: "ยกเลิก",
    });

    // console.log(data);

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
    // console.log();
    let data = JSON.stringify({
      orderId: props.orderId,
      logic: "ได้รับแล้ว",
    });

    // console.log(data);

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
        {data.type == "other" || (data.type != "rider" && (status != "รอยืนยัน" && status != "ยกเลิก" && status != "ได้รับแล้ว")) ? (
          auth.user == props.username && status== "ยืนยันออเดอร์" ? (
            <div className="flex justify-center">
              <button className="bg-green-400 rounded" onClick={handleRecieved}>
                Recieved
              </button>
            </div>
          ) : (
            <></>
          )
        ) : ( data.type == "rider" || data.type == "owner" ) && ( status == "ยกเลิก" || status == "ได้รับแล้ว") || status == "ยืนยันออเดอร์"? (
          <></>
        ) : (
          <>
            <div className="flex flex-row justify-center mt-4 lg:justify-end mr-4 ">
              <div className="flex justify-center px-4">
                <button
                  className="bg-green-400 rounded-lg p-2"
                  onClick={handleConfirm}
                >
                  Confirm
                </button>
              </div>

              <div className="flex justify-center ">
                <button className="bg-red-400 rounded-lg p-2" onClick={handleCancel}>
                  cancel
                </button>
              </div>
            </div>
          </>
        )}
      </>
    );
  }, [status]);

  return (
    // <div className=" bg-gray-200 accent-gray-300 rounded-lg">
    //   <div className="flex justify-center">
    //     <h2>
    //       {props.nickname}({props.realname}){" "}
    //     </h2>
    //     <br />
    //     <div>{props.menuname}</div>
    //     <div>จำนวน{props.amount}กล่อง</div>
    //     <div>{props.timeCreated}</div>
    //     <div>{props.orderStatus}</div>
    //     <br />
    //     {button}
    //   </div>
    // </div>

    <div className=" bg-gray-200 accent-gray-300 rounded-lg mb-7 w-5/12 pb-5 z-10 ">
     

      <br />
      <body className="w-full mx-auto pb-4">
        <div className="relative block  rounded-lg border border-gray-100 p-4 sm:p-8 lg:p-8">
          <span className="absolute inset-x-0 bottom-0 h-2 "></span>

          <div className="sm:flex sm:justify-between sm:gap-4">
            <div className="flex flex-col">
              <h3 className="text-xl font-bold text-gray-900 sm:text-xl">
                {props.menuname} {"     "} จำนวน {props.amount} กล่อง
              </h3>

              <p className="mt-1 text-lg font-medium text-gray-600">
                ของ {props.nickname}({props.realname}) - โพสต์{" "}
                {props.timeCreated.substring(11, 16)}
              </p>

            </div>

            
            <div className="flex justify-center pr-16">{props.orderStatus}</div>
          </div>

          <div className="mt-2">
            <p className=" text-lg ">{button}</p>
          </div>
        </div>
      </body>
    </div>
  );
};

export default OrderConfirmForm;
