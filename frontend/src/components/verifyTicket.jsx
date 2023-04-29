import React, { useState } from "react";
import useAuth from "../hooks/useAuth";
const POST_URL = "/Post/status/";

import axios from "../api/axios";

import userLogo from "../assets/user.jpg";

function VerifyTicket(data) {
  const props = data.props;
  const type = data.type;
  let statusBlog;
  console.log(props);
  const { auth } = useAuth();
  const [selectedStatus, setStatus] = useState(props.status);

  const handleSubmit = async (e) => {
    console.log(selectedStatus);
    let data = {
      postId: props.postId,
      status: selectedStatus,
    };

    console.log(data);

    Promise.all([axios.put(POST_URL, data)])
      .then((response) => {
        console.log(response[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  if (type == "Selective") {
    statusBlog = (
      <div className="flex items-center">
        <label htmlFor="exampleTime" className="text-lg ml-1">
          สถานะ
        </label>
        <select
          value={selectedStatus}
          onChange={(e) => setStatus(e.target.value)}
          className="bg-gray-400 rounded-lg text-white text-lg ml-1 border"
        >
          <option value="กำลังรับออเดอร์">กำลังรับออเดอร์</option> 
          <option value="ปิดรับออเดอร์">ปิดรับออเดอร์</option> 
          <option value="ถึงจุดนัดแล้ว">ถึงจุดนัดแล้ว</option> 
          <option value="ส่งเรียบร้อย">ส่งเรียบร้อย</option>
        </select>
        <button
          onClick={handleSubmit}
          className="mx-1 border-solid border-l-black border-l-[12px] border-y-transparent border-y-[12px] hover:border-l-black/50"
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
        <div className="float-right bg-gray-400 rounded-xl p-1">
          <p className="flex justify-center">{statusBlog}</p>
        </div>
        <div className="flex flex-row">
          <img src={userLogo} alt="" className="w-11 rounded-full" />
          <p className="flex items-center pl-4 text-2xl">
            {auth.nickname}({auth.realname})
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
            <p className="pb-2">จุดนัดรับ : {props.location}</p>
            <p className="pb-2">ช่วงเวลานัดรับ : {props.reserved}</p>
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
