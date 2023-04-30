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

  useEffect(() => {
    console.log(auth);
  }, [auth]);

  return (
    <div>
      <div className="flex items-center justify-center   ">
        <div className=" ">
          <img
            className="absolute inset-x-0 bottom-[0] w-100 lg:w-screen    "
            src="https://media.discordapp.net/attachments/1095391598034026657/1101137741657419796/5eede7de0e9d84fd.png?width=1046&height=588"
          ></img>
        </div>

        <div className="absolute  inset-0 flex items-center justify-center flex-row">
          <div className="container bg-slate-100 h:3/5 lg:h-[450px] w-2/4  border-gray-400 rounded-[30px] drop-shadow-xl p-4 lg:flex-row  flex-col flex  items-center    ">
            <div className="basis-3/5">
              <div className=" flex flex-col items-center justify-center">
                <img
                  className="  bg-fluid h-[150px] lg:h-[250px] "
                  src="https://media.discordapp.net/attachments/1006931952454082590/1098314659070750880/Frame_15__1_-removebg-preview.png?width=673&height=578"
                ></img>
                <div className="font-semibold text-neutral-600/100 text-xl	">
                  FriendDeliver
                </div>
              </div>
            </div>
            <div className=" lg:border-0  lg:w-0 lg:border-r lg:h-4/5 sm:border-b w-1/2 border-gray-400"></div>

            <div className="basis-3/5 pr-[40px] bg-slate-300/70 rounded-[20px]  border-gray-300 flex lg:w-3/4  items-center justify-center m-2 lg:ml-10 lg:m-0" >
              <div className="p-4">
                <dev className="lg:h-full   ">
                  <div className="font-semibold text-neutral-600/45 text-lg lg:pb-6 pb-4 ">
                    Profile
                  </div>
                  <div className="flex flex-row">
                    <p className="lg:pl-2 ">Username : {auth.user}</p>
                    
                  </div>

                  <br />
                  <p className="lg:pl-2">Nickname : {auth.nickname}</p>
                  <br />
                  <p className="lg:pl-2">Realname : {auth.realname}</p>
                  <br />
                  <p className="lg:pl-2 lg:pb-4">Tel Number : {tel}</p>
                </dev>
              </div>
            </div>
            <div className=" lg:pt-[340px] lg:pr-4">
              <Logout></Logout>
            </div>
            
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Profile;
