import React, { useEffect, useState } from "react";
import VerifyBlog from "../components/verifyBlog";
const POST_USER_URL = "http://localhost:5287/api/Post/user/";
const ORDER_USER_URL = "http://localhost:5287/api/Order/username/";
const POST_POSTID_URL = "http://localhost:5287/api/Post/";
import axios from "axios";
import useAuth from "../hooks/useAuth";

function OrderStatus() {
  const [resOrder, setResOrder] = useState("");
  const [resPost, setResPost] = useState("");
  const [combine, setCombine] = useState();
  const [unique, setUnique] = useState("");

  const { auth } = useAuth();

  function handleJson() {
    if (resOrder != "" && resPost != "" && unique != "") {
      let s = JSON.stringify(unique)
      const postList = JSON.parse(s);
      console.log(JSON.parse(postList[0]));
      if (postList.length == 0) {
        return <></>;
      } else if (postList.length == 1) {
        return <div key={1}><VerifyBlog data={JSON.parse(postList[0])}></VerifyBlog></div>;
      } else {
        return postList.map((item, i) => {
          return <div key={i}><VerifyBlog data={JSON.parse(postList[i])}></VerifyBlog></div>;
        });
      }
    }
  }

  useEffect(() => {
    axios
      .get(ORDER_USER_URL.concat(auth.user))
      .then((response) => {
        console.log(response);
        if (Object.keys(response.data).length == 0) {
          return [];
        } else if (Object.keys(response.data).length == 1) {
          return [POST_POSTID_URL.concat(response.data[0].postId)];
        } else {
          return response.data.map((item) => {
            return POST_POSTID_URL.concat(item.postId);
          });
        }
      })
      .then((response) => {
        axios.all(response.map((link) => axios.get(link))).then((response) => {
          console.log(response[0].data[0]);
          let content;
          if (Object.keys(response).length == 0) {
            content = [];
          } else if (Object.keys(response).length == 1) {
            content = response[0].data;
          } else {
            content = response[0].data.map((item) => {
              return item;
            });
          }
          console.log(content);
          setResOrder(content);
        });
      })
      .then(() => {
        axios.get(POST_USER_URL.concat(auth.user)).then((response) => {
          console.log(response.data);
          let content;
          if (Object.keys(response.data).length == 0) {
            content = [];
          } else if (Object.keys(response.data).length == 1) {
            content = response.data;
          } else {
            content = response.data.map((item) => {
              return item;
            });
          }
          console.log(content);
          setResPost(content);
        });
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    if (resOrder != "" && resPost != "") {
      let content = resOrder.concat(resPost);
      let uniqueContent = new Set(content.map(JSON.stringify));
      console.log(content);
      setCombine(resOrder.concat(resPost));
      setUnique(Array.from(uniqueContent));
    }
  }, [resOrder, resPost]);
  return (
    <div className="w-screen h-screen">
      <div className="mt-36 flex  flex-col gap-y-3 px-4 ">
        {handleJson()}
      </div>
    </div>
  );
}

export default OrderStatus;
