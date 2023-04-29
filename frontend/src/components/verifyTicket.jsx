import React, { useState } from "react";
import useAuth from "../hooks/useAuth";
const POST_URL = "/Post/status/";

import axios from "../api/axios";

function VerifyTicket(data) {
  const props = data.props
  const type = data.type
  let statusBlog;
  const { auth } = useAuth();
  const [selectedStatus, setStatus] = useState(props.status);

  const handleSubmit = async (e) => {
    console.log(selectedStatus);
    let data = {
      postId: props.postId,
      status: selectedStatus
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
      <div>
        <label htmlFor="exampleTime" className="text-lg">
          สถานะ
        </label>
        <select
          value={selectedStatus}
          onChange={(e) => setStatus(e.target.value)}
          className="bg-gray-400 rounded-lg text-white text-lgl"
        >
          <option value="กำลังรับออเดอร์">กำลังรับออเดอร์</option> 
          <option value="ปิดรับออเดอร์">ปิดรับออเดอร์</option> 
          <option value="ถึงจุดนัดแล้ว">ถึงจุดนัดแล้ว</option> 
          <option value="ส่งเรียบร้อย">ส่งเรียบร้อย</option>
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
  return (
    <div className="w-[750px] h-[300px] bg-stone-200 rounded-lg flex flex-col p-5">
      <div className="flex flex-row">
        <div className="p-5 rounded-full bg-gray-500 justify-start"></div>
        <div className="ml-[10px] text-4xl"> {props.nickname} {props.realname}</div>
        <div className="ml-[50px] self-end">
          Posted {props.timeCreated.substring(11, 16)}
        </div>
        <div className="ml-[80px] self-end">{statusBlog}</div>
      </div>
      <div className="text-3xl ml-[20px] pt-5">ร้าน : {props.storename}</div>

      <div className="pt-3 ml-[160px] text-lg">
        จำนวนที่รับ : {props.amount}
      </div>
      <div className="pt-1 ml-[160px] text-lg">จุดนัดรับ : {props.location}</div>
      <div className="pt-1 ml-[160px] text-lg">
        ช่วงเวลานัดรับ : {props.reserved}
      </div>
      <div className="pt-1 ml-[160px] text-lg">วัน/เดือน/ปี : {props.date}</div>
    </div>
  );
}

export default VerifyTicket;
