import React, { useState } from "react";
import useAuth from "../hooks/useAuth";
const POST_URL = "/Post/";

import axios from "../api/axios";

import userLogo from "../assets/user.jpg";

function VerifyTicket(props) {
  let statusBlog;
  const { auth } = useAuth();

  const [selectedStatus, setStatus] = useState("");
  let user;

  const handleSubmit = async (e) => {
    console.log(selectedStatus);
    let data = {
      postId: 0,
      username: "string",
      nickname: "string",
      realname: "string",
      storename: "string",
      amount: 0,
      location: "string",
      reserved: "string",
      date: "string",
      status: selectedStatus,
      orderList: "string",
      timeCreated: "2023-04-26T14:11:56.466Z",
    };

    console.log(data);

    Promise.all([axios.put(POST_URL.concat(props.postId), data)])
      .then((response) => {
        console.log(response[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  if (props.type == "Selective") {
    statusBlog = (
      <div className="flex items-center justify-center">
        <label htmlFor="exampleTime" className="text-lg font-semibold">
          สถานะ
        </label>
        <select
          value={selectedStatus}
          onChange={(e) => setStatus(e.target.value)}
          className="bg-gray-400 rounded-lg text-white text-lg mx-1 border"
        >
           <option value="closed_reciving">ปิดรับออเดอร์</option> 
          <option value="reciving">กำลังรับ</option> 
          <option value="delivering">ถึงจุดนัดแล้ว</option> 
          <option value="closed">ส่งเรียบร้อย</option>
        </select>
        <button
          onClick={handleSubmit}
          className="ml-[10px] border-solid border-l-black border-l-[12px] border-y-transparent border-y-[12px]"
        ></button>
      </div>
    );
  } else if (props.status === "Ordering") {
    statusBlog = (
      <div>
        <div></div>
      </div>
    );
  } else {
    statusBlog = (
      <div>
        <div>{props.status}</div>
      </div>
    );
  }
  const date = props.date.split("-");
  const day = date[2];
  const month = date[1];
  const year = date[0];
  return (
    <div className="flex justify-center">
      <div className="bg-gray-200 mb-16 p-10 rounded-3xl drop-shadow-md w-7/12">
        <div className="float-right bg-gray-400 rounded-xl p-1 px-2">
          <p className="flex justify-center">{statusBlog}</p>
        </div>
        <div className="flex flex-row">
          <img src={userLogo} alt="" className="w-11 rounded-full" />
          <p className="flex items-center pl-4 text-2xl">
            {" "}
            {props.name}
            <span className="pl-10 font-light text-base">
              Posted {props.timeCreated.substring(11, 16)}
            </span>
          </p>
        </div>
        <br />
        <div className="pl-6 text-xl">
          <p className="text-3xl py-4">ร้าน : {props.storename} </p>
          <div className="pl-24">
            <p className="pb-2">จำนวนที่รับ : {props.amount} จาน</p>
            <p className="pb-2">จุดนัดรับ : {props.locate}</p>
            <p className="pb-2">ช่วงเวลานัดรับ : {props.time}</p>
            <p>
              วันที่/เดือน/ปี : {day}/{month}/{year}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VerifyTicket;
