import React from "react";
import Blog from "./Blog";
import OrderBlog from "./OrderBlog";
import CreateOrderForm from "./OrderCreateForm";
import { useState } from "react";
import useAuth from "../hooks/useAuth";

function PostSet(props) {
  const item = props.item;
  const { auth } = useAuth();
  const [isRecentClick, setIsRecentClick] = useState(false);
  const [isFoodClick, setIsFoodClick] = useState(false);
  return (
    <div className="flex justify-center">
      <div className="bg-slate-700 text-slate-50 mb-16 p-10 rounded-3xl drop-shadow-md w-7/12">
        {Blog(item)}
        {auth.user == null ? (
          <></>
        ) : (
          <>
            <div className="flex justify-between my-8 h-10">
              <button
                className="bg-gray-100/75 text-black drop-shadow-md w-1/2 text-center rounded text-lg hover:bg-gray-200 mr-4"
                onClick={() => {
                  setIsRecentClick(!isRecentClick);
                  console.log("test");
                }}
              >
                recent order
              </button>
              <button
                className="bg-gray-100/75 text-black drop-shadow-md w-1/2 text-center rounded text-lg hover:bg-gray-200 ml-4"
                onClick={() => {
                  setIsFoodClick(!isFoodClick);
                }}
              >
                order food
              </button>
            </div>
            <div className={isRecentClick ? "visible" : "hidden"}>
              <OrderBlog postId={item.postId}></OrderBlog>
            </div>
            <div className={isFoodClick ? "visible" : "hidden"}>
              <CreateOrderForm postId={item.postId}></CreateOrderForm>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default PostSet;
