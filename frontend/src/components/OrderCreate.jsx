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
    <div className="flex flex-row w-[750px] h-[100px] bg-gray-500  rounded-b-lg">
      <div className="h-[30px] w-[750px] flex flex-row self-center ">

        <div className="ml-[10px] p-4 rounded-full bg-slate-300 "></div>
        <p className= "ml-[5px] text-xl">ฉัน</p>
        <div className=" flex flex-row bg-amber-200 rounded-lg h-[40px] ml-[30px]">
          <div className="flex flex-row self-center">
            <label htmlFor="exampleStoreName" className="ml-[10px] text-base">ชื่ออาหาร</label>
            <input
              type="text"
              onChange={(e) => setStore(e.target.value)}
              name="store"
              id="store"
              className="bg-gray-400 rounded-lg text-white text-base ml-[50px] h-[30px] w-[150px]"
            />
          </div>
          <div className="ml-[120px] flex flex-row self-center">

            <label htmlFor="exampleAmount" className='text-base mr-[30px]'>จำนวน  </label>
            <input
              type="number"
              onChange={(e) => setAmt(e.target.value)}
              name="amount"
              id="amount"
              className="bg-gray-400 rounded-lg text-white text-base h-[30px] w-[60px]"
            />
            <p className='text-base ml-[10px]'>กล่อง</p>
          </div>
        </div>
        <div className="ml-[30px] ">
          <button type="Submit" onClick={handleSubmit} className='border-solid border-l-slate-300 border-l-[12px] border-y-transparent border-y-[12px] '>
          </button>
        </div>
      </div>


    </div>
  );
};

export default CreateOrderForm;
