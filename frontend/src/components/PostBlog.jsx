import React from "react";
import { useState, useEffect } from "react";
import axios from "../api/axios";
import Blog from "./Blog";
const POST_URL = "/Post";

function PostBlog() {
  const [posts, setPosts] = useState(<></>);
  function getBlog(item, i) {
    console.log(i);
    return (
      <div  className="flex items-center justify-center">
        <div key={i} className="h-1/4 w-1/5 border-solid border-2 ">
          {Blog(item)}
        </div>
      </div>
      
    );
  }
  useEffect(() => {
    Promise.all([axios.get(POST_URL)])
      .then((response) => {
        console.log(response[0].data);
        console.log(response[0].data[1]["username"]);
        setPosts(response[0].data.map(getBlog));
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return <div  > <br /> <br /> <br />{posts}</div>;
}

export default PostBlog;