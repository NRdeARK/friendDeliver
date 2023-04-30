import React from "react";
import PostBlog from "../components/PostBlog";
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
function OpenPost() {
  const { showModal, isAllow, data, auth, setSubmit, setShowModal } = useAuth();
  return (
    <div>
      <div className="flex justify-end mr-24 mt-36">
        <Link
          to="/createPost"
          className="flex flex-col items-center transition ease-in-out delay-150 duration-300
                    hover:-translate-y-1 hover:scale-110"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-16 h-16 bg-white rounded-full p-0 shadow-lg "
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <p className="font-semibold text-lg mt-2">create post</p>
        </Link>
      </div>
      <PostBlog></PostBlog>
      {showModal ? (
        <div>
          {isAllow ? (
            <>
              <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                <div className="relative w-1/4 my-6 mx-auto">
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
                        เมนู : {data.storeMenu} <br />
                        จำนวน : {data.amount} จาน
                        <br />
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
                <div className="relative w-1/4 my-6 mx-auto">
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
                        เมนู : {data.storeMenu} <br />
                        จำนวน : {data.amount} <br />
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

export default OpenPost;
