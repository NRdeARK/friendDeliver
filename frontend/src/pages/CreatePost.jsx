import React, { Component } from "react";

import CreatePostForm from "../components/createPost";
import useAuth from "../hooks/useAuth";

function CreatePost() {
  const { showModal, isAllow, data, auth, setSubmit, setShowModal } = useAuth();
  return (
    <div className="flex items-center justify-center h-screen bg-amber-400">
      <img
            className="z-0 fixed inset-x-0 bottom-[0]  w-50 lg:w-screen    "
            src="https://media.discordapp.net/attachments/1006931952454082590/1102104390036369448/9.png?width=881&height=496"
          ></img>
      <CreatePostForm></CreatePostForm>
      {showModal ? (
        <div>
          {isAllow ? (
            <>
              <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                <div className="relative w-1/2 my-6 mx-auto">
                  {/*content*/}
                  <div className="border-0 rounded-xl shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                    {/*header*/}
                    <div className="p-5 border-b border-solid border-slate-200 rounded-t flex justify-center">
                      <h3 className="text-3xl font-semibold">ยืนยัน</h3>
                    </div>
                    {/*body*/}
                    <div className="relative p-5 flex-auto">
                      <h1 className="text-xl pl-10 xl:p-1">
                        {auth.nickname} ({auth.realname}) #{auth.user}
                      </h1>
                      <p className="pt-5 text-slate-500 text-lg leading-relaxed pl-20 xl:pl-10">
                        ชื่อร้าน : {data.store} <br />
                        จำนวน : {data.amount} จาน <br />
                        จุดนัดรับ: {data.location} <br />
                        ช่วงเวลาที่นัดรับ : {data.selectedTime} <br />
                        วันที่ : {data.date.split("-")[2]}/{data.date.split("-")[1]}/
                        {data.date.split("-")[0]}
                      </p>
                    </div>
                    {/*footer*/}
                    <div className="flex items-center justify-end p-5 border-t border-solid border-slate-200 rounded-b">
                      <button
                        className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm rounded shadow 
                                    hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150
                                    w-1/2 py-2"
                        type="button"
                        onClick={() => {
                          setSubmit(true);
                          setShowModal(false);
                        }}
                      >
                        ยืนยัน
                      </button>
                      <button
                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none 
                                    focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 hover:text-red-500/75
                                    w-1/2"
                        type="button"
                        onClick={() => setShowModal(false)}
                      >
                        ยกเลิก
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
            </>
          ) : (
            <>
              <div
                className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none 
                              focus:outline-none"
              >
                <div className="relative w-1/2 my-6 mx-auto">
                  {/*content*/}
                  <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                    {/*header*/}
                    <div className="flex justify-center p-5 border-b border-solid border-slate-200 rounded-t">
                      <h3 className="text-3xl font-semibold">
                        กรุณากรอกให้ครบ
                      </h3>
                    </div>
                    {/*body*/}
                    <div className="relative p-5 flex-auto">
                      <h1 className="text-xl pl-10 xl:p-1">
                        {auth.nickname} ({auth.realname}) #{auth.user}
                      </h1>
                      <p className="pt-5 text-slate-500 text-lg leading-relaxed pl-20 xl:pl-10">
                        ชื่อร้าน : {data.store} <br />
                        จำนวน : {data.amount} จาน <br />
                        จุดนัดรับ: {data.location} <br />
                        ช่วงเวลาที่นัดรับ : {data.selectedTime} <br />
                        วันที่ : {data.date.split("-")[2]}/
                        {data.date.split("-")[1]}/{data.date.split("-")[0]}
                      </p>
                    </div>
                    {/*footer*/}
                    <button
                      className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none 
                        focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 hover:text-red-500/75
                        border-t border-solid border-slate-200"
                      type="button"
                      onClick={() => setShowModal(false)}
                    >
                      ยกเลิก
                    </button>
                  </div>
                </div>
              </div>
              <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
            </>
          )}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default CreatePost;
