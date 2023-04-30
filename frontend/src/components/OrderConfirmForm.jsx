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
    <div className=" bg-gray-200 accent-gray-300 rounded-lg mb-7 w-5/12 pb-5">
      {/* w-7/12  p-5 */}
      {/* <div className="flex flex-row">
          <p className="flex items-center pl-4 text-2xl ">
            {props.nickname}({props.realname})
            <span className="pl-10 font-light text-base">
              Posted {props.timeCreated.substring(11, 16)}
            </span>
            <div className="flex items-end lg:pl-64 text-2xl">{confirmed}</div>

          </p>          

        </div>
        <br />
        <div className="flex">
          <div className="basis-1/4"></div>
          <span className="text-xl basis-2/4"> {props.menuname}</span>
          <span className="basis-1/4">จำนวน {props.amount} กล่อง</span>
        </div> */}

      <br />
      <body class="w-full mx-auto pb-4">
        <div class="relative block overflow-hidden rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8">
          <span class="absolute inset-x-0 bottom-0 h-2 "></span>

          <div class="sm:flex sm:justify-between sm:gap-4">
            <div>
              
                <h3 class="text-lg font-bold text-gray-900 sm:text-xl">
                {props.menuname} {"     "} จำนวน {props.amount} กล่อง
                
              </h3> 
              
              

              <p class="mt-1 text-md font-medium text-gray-600">
                ของ {props.nickname}({props.realname}) - โพสต์{" "}
                {props.timeCreated.substring(11, 16)}
              </p>
            </div>

            <div class="hidden sm:block sm:shrink-0">
              {/* <img alt="Paul Clapton" src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1180&amp;q=80" class="h-16 w-16 rounded-lg object-cover shadow-sm"></img> */}
            
            </div>
          </div>

          <div class="mt-2">
            <p class="max-w-[40ch] text-lg ">
              <div>{confirmed}</div>
            </p>
          </div>
          {confirmed != "-" ? (
            auth.user == props.username ? (
              <div className="mt-2 flex gap-4 sm:gap-6 flex justify-end">
                <button
                  className="bg-green-400 rounded hidden"
                  onClick={handleRecieved}
                >
                  ส่งแล้ว
                </button>
              </div>
            ) : (
              <></>
            )
          ) : data.type != "owner" ? (
            <></>
          ) : (
            <>
            <div class="mt-6 flex gap-4 sm:gap-6 justify-end">
              <div className="flex">
                <button
                  className="bg-green-400 rounded-lg px-2"
                  onClick={handleConfirm}
                >
                  ได้รับเรียบร้อย
                </button>
              </div>

              <div className="flex ">
                <button className="bg-red-400 rounded-lg p-2" onClick={handleCancel}>
                  ยกเลิก
                </button>
              </div>
            </div>
              
            </>
          )}
          
        </div>
      </body>
    </div>
  );
};

export default OrderConfirmForm;
