import React from "react";
import { useState, useEffect } from "react";
import axios from "../api/axios";
import Blog from "./Blog";
import CreateOrderForm from "./OrderCreateForm";
import OrderBlog from "./OrderBlog";
const POST_URL = "/Post";
import useAuth from "../hooks/useAuth";

function PostBlog() {
  const { auth } = useAuth();
  const [posts, setPosts] = useState(<></>);
  const [isPosts, setIsPosts] = useState(false);

  function getBlog(item, i) {
    // console.log(item.postId);
    return (
      <div className="flex justify-center" key={i}>
        <div className="bg-gray-200 mb-16 p-10 rounded-3xl drop-shadow-md w-7/12">
          {Blog(item)}
          {auth.user == null ? (
            <></>
          ) : (
            <div>
              <OrderBlog postId={item.postId}></OrderBlog>
              <CreateOrderForm postId={item.postId}></CreateOrderForm>
            </div>
          )}
        </div>
      </div>
    );
  }

  useEffect(() => {
    Promise.all([axios.get(POST_URL)])
      .then((response) => {
        // console.log(Object.keys(response[0].data).length);
        if (Object.keys(response[0].data).length <= 0) {
          setPosts(<></>);
          setIsPosts(false);
        } else if (Object.keys(response[0].data).length == 1) {
          setPosts(
            <div className="flex justify-center">
              <div
                key={1}
                className="bg-gray-200 mb-16 p-10 rounded-3xl drop-shadow-md w-7/12"
              >
                {Blog(response[0].data[0])}
                {auth.user == null ? (
                  <></>
                ) : (
                  <div>
                    <OrderBlog postId={response[0].data[0].postId}></OrderBlog>
                    <CreateOrderForm
                      postId={response[0].data[0].postId}
                    ></CreateOrderForm>
                  </div>
                )}
              </div>
            </div>
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
