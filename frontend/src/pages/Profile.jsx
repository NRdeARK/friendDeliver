import React from "react";
import useAuth from "../hooks/useAuth";
import { useState, useEffect } from "react";
import axios from "../api/axios";
import Logout from "../components/Logout";
const USER_URL = "/Auth/";

function Profile() {
  const { auth } = useAuth();
  const [tel, setTel] = useState("");

  useEffect(() => {
    Promise.all([axios.get(USER_URL + auth.user)])
      .then((response) => {
        console.log(response[0].data);
        setTel(response[0].data.tel);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <div className="flex items-center justify-center   ">
        <div className=" ">
          <img
            className="absolute inset-x-0 bottom-[0] w-100 lg:w-screen    "
            src="https://media.discordapp.net/attachments/1095391598034026657/1101137741657419796/5eede7de0e9d84fd.png?width=1046&height=588"
          ></img>
        </div>

        <div className="absolute  inset-0 flex items-center justify-center ">
          <div className=" bg-slate-100 h-3/5 w-2/4  border-gray-400 rounded-[30px] drop-shadow-xl p-4  flex flex-col items-center    ">
            <div
              className=" bg-cover bg-center z-20 h-1/4  w-1/3 sm:w-4/12 "
              style={{
                backgroundImage:
                  "url('https://media.discordapp.net/attachments/1006931952454082590/1098314659070750880/Frame_15__1_-removebg-preview.png?width=673&height=578')",
              }}
            ></div>
            <div>FriendDeliver</div>

            <div>
              Profile
              {auth.username}
              {auth.nickname}
              {auth.realname}
              {tel}
            </div>
            <br />
            <div className="">
              <Logout></Logout>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
