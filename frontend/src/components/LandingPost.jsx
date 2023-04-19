import React from "react";
import { useState, useEffect } from "react";
import axios from "../api/axios";
import Ticket from "./Tickets";
const POST_URL = "/Post";

function LandingPost() {
  const [data, setData] = useState([]);
  const [posts, setPosts] = useState(<></>);
  function getUserName(item, i) {
    console.log(i);
    return (
      <div key={i} className="border-solid border-2 border-indigo-600">
        {item.username}
        {Ticket(item)}
      </div>
    );
  }
  useEffect(() => {
    Promise.all([axios.get(POST_URL)])
      .then((response) => {
        setData(response);
        console.log(response[0].data);
        console.log(response[0].data[1]["username"]);
        setPosts(response[0].data.map(getUserName));
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return <div>{posts}</div>;
}

export default LandingPost;
