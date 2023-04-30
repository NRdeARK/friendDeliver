import React from "react";
import { useState, useEffect } from "react";
import axios from "../api/axios";
const POST_URL = "/Post/status/กำลังรับออเดอร์";
import useAuth from "../hooks/useAuth";
import PostSet from "./PostSet";

function PostBlog() {
  const { auth, data} = useAuth();
  const [posts, setPosts] = useState(<></>);
  const [isPosts, setIsPosts] = useState(false);

  function getBlog(item, i) {
    return <PostSet item={item} key={i}></PostSet>;
  }

  useEffect(() => {
    Promise.all([axios.get(POST_URL)])
      .then((response) => {
        console.log(Object.keys(response[0].data).length);
        console.log(response[0].data);
        if (Object.keys(response[0].data).length <= 0) {
          setPosts(<></>);
          setIsPosts(false);
        } else if (Object.keys(response[0].data).length == 1) {
          setPosts(
            <PostSet item = {response[0].data[0]}></PostSet>
          );
          setIsPosts(true);
        } else {
          setPosts(response[0].data.map(getBlog));
          setIsPosts(true);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, [],[data]);

  return (
    <div>
      {isPosts ? (
        <div>
          <br />
          <br />
          {posts}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default PostBlog;
