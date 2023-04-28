import React, { useEffect, useState } from "react";

import VerifyBlog from "../components/verifyBlog";

const POST_URL = "/Post/user/";

import axios from "../api/axios";

import useAuth from "../hooks/useAuth";

function OrderStatus() {
  let content;
  const [posts, setPosts] = useState(<></>);
  const { auth } = useAuth();

  useEffect(() => {
    Promise.all([axios.get(POST_URL.concat(auth.user))])
      .then((response) => {
        console.log(response[0].data);
        content = response[0].data.map((item, i) => {
          return (
            <div key={i}>
              <VerifyBlog data={item}></VerifyBlog>
            </div>
          );
        });
        setPosts(content);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="w-screen h-screen">
      <div className="mt-[60px] ml-[70px] flex flex-col items-center gap-y-3">
        {posts}
      </div>
    </div>
  );
}

export default OrderStatus;
