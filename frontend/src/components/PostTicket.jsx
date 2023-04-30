import React from "react";
import { useState, useEffect } from "react";
import axios from "../api/axios";
import Tickets from "./tickets";
const POST_URL = "/Post";

function PostTicket() {
  const [isPost, setIsPost] = useState(false)
  const [posts, setPosts] = useState(<></>);
  function getUserName(item, i) {
    // console.log(i);
    return (
      <div
        key={i}
        className=" "
      >
        {Tickets(item)}
      </div>
    );
  }
  useEffect(() => {
    Promise.all([axios.get(POST_URL)])
      .then((response) => {
        console.log(response[0].data);
        if (Object.keys(response[0].data).length == 0) {
          setPosts(<></>);
          // console.log(posts);
          setIsPost(false)
        } else {
          setIsPost(true)
          setPosts(response[0].data.map(getUserName));
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      { isPost ? (
        <div className=" grid grid-row gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
          
          {posts}
          
        </div>
      ) : (
        <div className="rounded-[45px] bg-amber-50 p-10 px-24">ไม่มีรายการ</div>
      )}
    </div>
  );
}

export default PostTicket;
