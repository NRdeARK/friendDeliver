import React from "react";
import { Link } from "react-router-dom";
import userLogo from '../assets/user.jpg'

function Blog(props) {
  const date=props.date.split('-');
  const day=date[2];
  const month=date[1];
  const year=date[0];
  return (
    <div>
      <Link to="/">
        <div className="bg-gray-400 w-auto rounded-xl float-right text-lg p-1 px-4">
          <p className="flex justify-center">{props.status}</p>
        </div>
        <div className="flex flex-row">
          <img src={userLogo} alt="" className="w-11 rounded-full"/>
          <p className="flex items-center pl-4 text-2xl">
            {props.nickname}({props.realname}) #{props.username}
            <span className="pl-10 font-light text-base">Posted {props.timeCreated.substring(11,16)}</span>
          </p>
        </div>
        <br />
        <div className="pl-6 text-lg">
          <p className="text-3xl py-4">ร้าน : {props.storename} </p>
          <div className="pl-24">
            <p className="pb-2">จำนวนที่รับ : {props.amount} จาน</p>
            <p className="pb-2">จุดนัดรับ : {props.location}</p>
            <p className="pb-2">ช่วงเวลานัดรับ : {props.reserved}</p>
            <p>วันที่/เดือน/ปี : {day}/{month}/{year}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Blog;
