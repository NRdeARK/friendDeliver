import React from "react";
import { Link } from "react-router-dom";
import userLogo from "../assets/user.jpg";

function BlogOrder(props) {
  return (
    <div>
      <Link to="/openOrder">
        <div className="flex flex-row">
          <img src={userLogo} alt="" className="w-11 rounded-full" />
          <p className="flex items-center pl-4 text-2xl">
            {props.nickname}({props.realname})
            <span className="pl-10 font-light text-base">
              Posted {props.timeCreated.substring(11, 16)}
            </span>
          </p>
        </div>
        <br />
        <div className="flex">
          <div className="basis-1/4"></div>
          <span className="text-xl basis-2/4"> {props.menuname}</span>
          <span className="basis-1/4">จำนวน {props.amount} กล่อง</span>
        </div>
      </Link>
    </div>
  );
}

export default BlogOrder;
