import React, { useState, useId } from "react";
import { Link } from 'react-router-dom';

import useAuth from "../hooks/useAuth";

const CreatePostForm = () => {
  // const [user, setUser] = useState("");
  const {auth} = useAuth()
  const [store, setStore] = useState("");
  const [amount, setAmt] = useState(1);
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("ช่วงเช้า");
  const [errMsg, setErrMsg] = useState("");
  const [showModal, setShowModal] = React.useState(false);


  const handleSubmit = async (e) => {
    console.log(selectedTime);
    let data = JSON.stringify({
      postId : 0,
      username: auth.user,
      nickname : auth.nickname,
      realname : auth.realname,
      storename: store,
      amount: amount,
      location: location,
      reserved: selectedTime,
      date: date,
      
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

    fetch("http://localhost:5287/api/Post", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  };

  return (
    <div className="flex flex-col justify-stretch flex-nowrap h-[500px] w-[900px] bg-gray-200 accent-gray-300 rounded-lg">
      <div className='p-4 ml-[20px] mt-[10px] flex flex-row justify-items-start'>
        <div className="p-5 rounded-full bg-gray-500 justify-start"></div>
        <p className= "ml-5 text-2xl justify-start">{auth.nickname}({auth.realname})</p>
      </div>
      <div className="ml-[70px] py-5 flex flex-row ">
        <label htmlFor="exampleStoreName" className="ml-5 text-4xl">ร้าน :   </label>
        <input
          type="text"
          onChange={(e) => setStore(e.target.value)}
          name="store"
          id="store"
          className="bg-gray-400 rounded-lg text-white ml-5 px-[80px] py-2 text-xl"
        />
      </div>

      <div className="py-3 ms-[180px] flex flex-row">
        <label htmlFor="exampleAmount" className='text-xl'>จำนวนที่รับ : </label>
        <input
          type="number"
          onChange={(e) => setAmt(e.target.value)}
          name="amount"
          id="amount"
          className="bg-gray-400 rounded-lg text-white ml-4 p-[1px] text-xl"
        />
        <p className='text-xl ml-5'>จาน</p>
      </div>

      <div className="py-3 ms-[180px]">
        <label htmlFor="exampleLocation" className='text-xl'>จุดนัดรับ : </label>
        <input
          type="text"
          onChange={(e) => setLocation(e.target.value)}
          name="locate"
          id="locate"
          className="bg-gray-400 rounded-lg text-white text-xl p-[1px]"
        />
      </div>

      <div className="py-3 ms-[180px]">
        <label htmlFor="exampleTime" className='text-xl'>ช่วงเวลาที่นัดรับ : </label>
        <select
          value={selectedTime}
          onChange={(e) => setSelectedTime(e.target.value)}
          className='bg-gray-400 rounded-lg text-white text-xl'
        >
            <option value="ช่วงเช้า">ช่วงเช้า</option> {" "}
          <option value="ช่วงสาย">ช่วงสาย</option> {" "}
          <option value="ช่วงเที่ยง">ช่วงเที่ยง</option> {" "}
          <option value="ช่วงบ่าย">ช่วงบ่าย</option> {" "}
          <option value="ช่วงเย็น">ช่วงเย็น</option>
        </select>
      </div>

      <div className="py-3 ms-[180px]">
        <label htmlFor="exampleDate" className='text-xl'>ว/ด/ป : </label>
        <input
          type="date"
          onChange={(e) => setDate(e.target.value)}
          name="date"
          id="date"
          className='bg-gray-400 rounded-lg text-white text-xl'
        />
      </div>
      <div className='grid justify-items-end mr-[40px] mt-[40px]'>
        <button type="Submit" onClick={() => {
                      setShowModal(true);
                    }}
                     className='bg-teal-500 p-1 text-white text-3xl'>
          โพสต์
        </button>
        {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                
                  <h3 className="text-3xl font-semibold">
                  
                  <ion-icon name="mail-open-outline" class="text-3xl px-4"></ion-icon>
                  
                  Verification

                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <p className="my-4 text-slate-500 text-lg leading-relaxed">
                    I always felt like I could do anything. That’s the main
                    thing people are controlled by! Thoughts- their perception
                    
                  </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => {
                      handleSubmit();
                      setShowModal(false);}}
                  >
                    <Link to="/openPost">Confirm</Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
        
      </div>
    </div>
  );
};

export default CreatePostForm;
