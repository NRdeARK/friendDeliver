import React, { useState, useId } from "react";
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
    <div class="flex flex-col justify-stretch flex-nowrap h-[500px] bg-gray-200 accent-gray-300 rounded-lg w-full">
      <div class='p-4 ml-[20px] mt-[10px] flex flex-row justify-items-start'>
        <div class="p-5 rounded-full bg-gray-500 justify-start"></div>
        <p class= "ml-5 text-2xl justify-start">{auth.nickname}({auth.realname})</p>
      </div>
      <div class="ml-[120px] py-5 flex flex-row justify-items-start">
        <label htmlFor="exampleStoreName" class="ml-5 text-4xl">ร้าน :   </label>
        <input
          type="text"
          onChange={(e) => setStore(e.target.value)}
          name="store"
          id="store"
          class="bg-gray-400 rounded-lg text-white ml-5 px-[80px] py-2 text-xl"
        />
      </div>

      <div class="py-3 ms-[180px] flex flex-row">
        <label htmlFor="exampleAmount" class='text-xl'>จำนวนที่รับ : </label>
        <input
          type="number"
          onChange={(e) => setAmt(e.target.value)}
          name="amount"
          id="amount"
          class="bg-gray-400 rounded-lg text-white ml-4 p-[1px] text-xl"
        />
        <p class='text-xl ml-5'>จาน</p>
      </div>

      <div class="py-3 ms-[180px]">
        <label htmlFor="exampleLocation" class='text-xl'>จุดนัดรับ : </label>
        <input
          type="text"
          onChange={(e) => setLocation(e.target.value)}
          name="locate"
          id="locate"
          class="bg-gray-400 rounded-lg text-white text-xl p-[1px]"
        />
      </div>

      <div class="py-3 ms-[180px]">
        <label htmlFor="exampleTime" class='text-xl'>ช่วงเวลาที่นัดรับ : </label>
        <select
          value={selectedTime}
          onChange={(e) => setSelectedTime(e.target.value)}
          class='bg-gray-400 rounded-lg text-white text-xl'
        >
            <option value="ช่วงเช้า">ช่วงเช้า</option> {" "}
          <option value="ช่วงสาย">ช่วงสาย</option> {" "}
          <option value="ช่วงเที่ยง">ช่วงเที่ยง</option> {" "}
          <option value="ช่วงบ่าย">ช่วงบ่าย</option> {" "}
          <option value="ช่วงเย็น">ช่วงเย็น</option>
        </select>
      </div>

      <div class="py-3 ms-[180px]">
        <label htmlFor="exampleDate" class='text-xl'>ว/ด/ป : </label>
        <input
          type="date"
          onChange={(e) => setDate(e.target.value)}
          name="date"
          id="date"
          class='bg-gray-400 rounded-lg text-white text-xl'
        />
      </div>
      <div class='grid justify-items-end mr-[40px] mt-[40px]'>
        <button type="Submit" onClick={handleSubmit} class='bg-teal-500 p-1 text-white text-3xl'>
          โพสต์
        </button>
      </div>
    </div>
  );
};

export default CreatePostForm;
