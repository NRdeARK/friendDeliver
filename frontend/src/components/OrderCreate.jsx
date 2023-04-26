import React, { useState, useId } from "react";
import useAuth from "../hooks/useAuth";

const CreateOrderForm = () => {
  // const [user, setUser] = useState("");
  const {auth} = useAuth()
  const [storeMenu, setMenuname] = useState("");
  const [amount, setAmt] = useState(1);
  const [errMsg, setErrMsg] = useState("");

  const handleSubmit = async (e) => {
    let data = JSON.stringify({
      orderId : 0,
      username: auth.user,
      menuname: storeMenu,
      amount: amount,
    });

    console.log(data);

    var myHeaders = new Headers();
    myHeaders.append("Origin", "localhost:5173");
    myHeaders.append("Content-Type", "application/json");

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: data,
      redirect: "follow",
    };

    fetch("http://localhost:5287/api/Order", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  };

  return (
    <div class="flex flex-col justify-stretch flex-nowrap h-[200px] w-[980px] bg-gray-200 accent-gray-300 rounded-lg w-full">
      <div class='p-4 ml-[20px] mt-[10px] flex flex-row justify-items-start'>
        <div class="p-5 rounded-full bg-gray-500 justify-start"></div>
        <p class= "ml-5 text-2xl justify-start">{auth.user}</p>
        <label htmlFor="exampleStoreName" class="ml-5 text-4xl">เวลา</label>
      </div>
      <div class="ml-[90px] py-3 flex flex-row justify-items-start">
        <input
          type="text"
          onChange={(e) => setMenuname(e.target.value)}
          name="storeMenu"
          id="storeMenu"
          class="bg-gray-400 rounded-lg text-white ml-5 px-[70px] py-2 text-xl"
        />
        <div class="py-3 ms-[50px] flex flex-row">
        <label htmlFor="exampleAmount" class='text-xl'>จำนวน : </label>
        <input
          type="number"
          onChange={(e) => setAmt(e.target.value)}
          name="amount"
          id="amount"
          class="bg-gray-400 rounded-lg text-white ml-4 p-[1px] text-xl"
        />
        <p class='text-xl ml-5'>กล่อง</p>
      </div>

      <div class='grid justify-items-center mr-[40px] mt-[30px]'>
        <button type="Submit" onClick={handleSubmit} class='bg-green-500 p- text-white text-3xl'>
          สั่ง
        </button>
      </div>

      </div>
      </div>
  );
};

export default CreateOrderForm;
