import React from "react";
import { useState, useEffect } from "react";
import axios from "../api/axios";
import Blog from "./Blog";
const POST_URL = "/Post";

function PostBlog() {
  const [posts, setPosts] = useState(<></>);
  const [isPosts, setIsPosts] = useState(false);

  function getBlog(item, i) {
    console.log(i);
    return (
      <div className="flex justify-center">
        <div
          key={i}
          className="bg-gray-200 mb-16 p-10 rounded-3xl drop-shadow-md w-7/12"
        >
          {Blog(item)}
        </div>
      </div>
    );
  }

  useEffect(() => {
    Promise.all([axios.get(POST_URL)])
      .then((response) => {
        if (Object.keys(response[0].data).length >= 0) {
          setPosts(<></>);
          setIsPosts(false);
        } else if (Object.keys(response[0].data).length == 1) {
          setPosts(response[0].data.map(getBlog));
          setIsPosts(true);
        } else {
          setPosts(
            <div className="flex justify-center">
              <div
                key={0}
                className="bg-gray-200 mb-16 p-10 rounded-3xl drop-shadow-md w-7/12"
              >
                {Blog(response[0].data[0])}
              </div>
            </div>
          );
          setIsPosts(true);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      {isPosts ? (
        <div>
          <br /> <br /> <br />
          {posts}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default PostBlog;
