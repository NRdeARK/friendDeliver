import React from "react";
import { useState, useEffect } from "react";
import axios from "../api/axios";
import Tickets from "./tickets";
const POST_URL = "/Post";

function PostTicket() {
  const [posts, setPosts] = useState(<></>);
  function getUserName(item, i) {
    console.log(i);
    return (
      <div key={i} className="flex flex-row justify-around items-center border-t-[1px] border-b-[1px] border-gray-600 p-3">
        {Tickets(item)}
      </div>
    );
  }
  useEffect(() => {
    Promise.all([axios.get(POST_URL)])
      .then((response) => {
        console.log(response[0].data);
        setPosts(response[0].data.map(getUserName));
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return <div class='w-[1200px] ml-[300px] p-[40px] bg-gray-200 rounded-md'>{posts}</div>;
}

export default PostTicket;
