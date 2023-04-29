import React, { useState, useEffect } from "react";
import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

function CreateOrderForm(props) {
  const { auth, setShowModal, setIsAllow, showModal, setData, setSubmit, submit} = useAuth();
  const { toggleUpdateOrder, setToggleUpdateOrder } = useAuth();
  const [storeMenu, setMenuname] = useState("");
  const [amount, setAmt] = useState(1);
  const [errMsg, setErrMsg] = useState("");
  const [checkForm, setCheckForm] = useState(false)
  const [checkSubmit, setCheckSubmit] = useState(false)


  const navigate = useNavigate();

  useEffect(() => {
    if(checkForm){
    setData({storeMenu,amount})
    if (storeMenu == "") {
      setIsAllow(false);
    } else {
      setIsAllow(true);
      setCheckSubmit(true)
    }}
    setCheckForm(false)
  }, [showModal]);

  useEffect(()=>{
    if(submit && checkSubmit){
      handleSubmit();
      setSubmit(false)
    }
    setCheckSubmit(false)
  },[submit])

  const handleSubmit = async (e) => {
    // console.log(auth)
    let data = JSON.stringify({
      orderId: 0,
      postId: props.postId,
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
        response.text();
        setToggleUpdateOrder(!toggleUpdateOrder);
        setData({})
      })
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
    navigate("/orderStatus");
  };

  

  return (
    <div className="flex flex-col bg-gray-400/50 rounded-xl w-full">
      <div className="p-4 ml-[20px] mt-[10px] flex flex-row">
        <img src={userLogo} alt="" className="w-11 rounded-full" />
        <p className="flex ml-5 text-2xl items-center">{auth.user}</p>
        {/* <label htmlFor="exampleStoreName" className="ml-5 text-4xl">
          เวลา
        </label> */}
      </div>
      <div className="ml-20 py-3 flex flex-row ">
        <div className="flex items-center w-full">
          <label htmlFor="exampleMenu" className="text-xl">
            เมนู
          </label>
          <input
            type="text"
            onChange={(e) => setMenuname(e.target.value)}
            name="storeMenu"
            id="storeMenu"
            className="bg-gray-400 rounded-lg text-white ml-5 px-2 text-xl w-full h-fit py-2"
          />
        </div>
        <div className="py-3 ml-5 flex flex-row items-center justify-center">
          <label htmlFor="exampleAmount" className="text-xl">
            จำนวน{" "}
          </label>
          <input
            type="number"
            onChange={(e) => setAmt(e.target.value)}
            name="amount"
            id="amount"
            className="bg-gray-400 rounded-lg text-white ml-5 px-2 text-xl w-12 h-fit py-2"
            value={1}
          />
          <p className="text-xl ml-5">กล่อง</p>
        </div>

        <div className="flex items-center mr-[40px]">
          <button
            type="Submit"
            onClick={() => {
              setCheckForm(true)
              setShowModal(true);
            }}
            className="bg-emerald-500 text-2xl rounded-lg text-white ml-5 p-2"
          >
            สั่ง
          </button>
        </div>
      </div>
    </div>
  );
}

export default CreateOrderForm;
