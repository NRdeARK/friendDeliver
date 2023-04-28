import React, { useState } from "react";
import useAuth from "../hooks/useAuth";

function CreateOrderForm(props){
  const {auth} = useAuth()
  const {toggleUpdateOrder, setToggleUpdateOrder} = useAuth();
  const [storeMenu, setMenuname] = useState("");
  const [amount, setAmt] = useState(1);
  const [errMsg, setErrMsg] = useState("");
  
  const handleSubmit = async (e) => {
    // console.log(auth)
    let data = JSON.stringify({
      orderId : 0,
      postId : props.postId,
      username: auth.username,
      nickname: auth.nickname,
      realname: auth.realname,
      menuname: storeMenu,
      amount: amount,
    });

    // console.log(data);

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
      .then((response) => {
        response.text()
        setToggleUpdateOrder(!toggleUpdateOrder)
      })
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
    
  };

  return (
    <div className="flex flex-col justify-stretch flex-nowrap h-[200px]  bg-gray-200 accent-gray-300 rounded-lg w-full">
      <div className='p-4 ml-[20px] mt-[10px] flex flex-row justify-items-start'>
        <div className="p-5 rounded-full bg-gray-500 justify-start"></div>
        <p className= "ml-5 text-2xl justify-start">{auth.user}</p>
        <label htmlFor="exampleStoreName" className="ml-5 text-4xl">เวลา</label>
      </div>
      <div className="ml-[90px] py-3 flex flex-row justify-items-start">
        <input
          type="text"
          onChange={(e) => setMenuname(e.target.value)}
          name="storeMenu"
          id="storeMenu"
          className="bg-gray-400 rounded-lg text-white ml-5 px-[70px] py-2 text-xl"
        />
        <div className="py-3 ms-[50px] flex flex-row">
        <label htmlFor="exampleAmount" className='text-xl'>จำนวน : </label>
        <input
          type="number"
          onChange={(e) => setAmt(e.target.value)}
          name="amount"
          id="amount"
          className="bg-gray-400 rounded-lg text-white ml-4 p-[1px] text-xl"
        />
        <p className='text-xl ml-5'>กล่อง</p>
      </div>

      <div className='grid justify-items-center mr-[40px] mt-[30px]'>
        <button type="Submit" onClick={handleSubmit} className='bg-green-500 p- text-white text-3xl'>
          สั่ง
        </button>
      </div>
      </div>
      </div>
  );
};

export default CreateOrderForm;
