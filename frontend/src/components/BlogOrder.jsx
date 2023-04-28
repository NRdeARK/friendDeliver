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
            {props.nickname}({props.realname}) #{props.username}
            <span className="pl-10 font-light text-base">
              Posted {props.timeCreated}
            </span>
          </p>
        </div>
        <br />
        <div className="flex">
          <div className="basis-1/4"></div>
          <div className="flex items-center basis-3/4 justify-around">
            <span className="text-xl"> {props.menuname}</span>
            <span>จำนวน {props.amount} กล่อง</span>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default BlogOrder;
