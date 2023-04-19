import React from "react";
import { useState, useEffect } from "react";
import axios from "../api/axios";
import Tickets from "./Tickets";
const POST_URL = "/Post";

function PostTicket() {
  const [posts, setPosts] = useState(<></>);
  function getUserName(item, i) {
    console.log(i);
    return (
      <div key={i} className="border-solid border-2 border-indigo-600">
        {item.username}
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

  return <div>{posts}</div>;
}

export default PostTicket;
