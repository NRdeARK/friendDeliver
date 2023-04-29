import React, { useEffect, useState } from "react";
import VerifyBlog from "../components/verifyBlog";
const POST_USER_URL = "http://localhost:5287/api/Post/user/";
const ORDER_USER_URL = "http://localhost:5287/api/Order/username/";
const POST_POSTID_URL = "http://localhost:5287/api/Post/";
import axios from "axios";
import useAuth from "../hooks/useAuth";

function OrderStatus() {
  let content;

  const [postIdList, setPostIdList] = useState([]);

  const [postsOwner, setPostsOwner] = useState([]);
  const [postsBuyer, setPostsBuyer] = useState([]);
  const [listBuyerPostId, setListBuyerPostId] = useState([]);
  const [listURL, setListURL] = useState([]);
  const [posts, setPosts] = useState([]);
  const { auth } = useAuth();

  useEffect(() => {
    Promise.all([axios.get(POST_USER_URL.concat(auth.user))])
      .then((response) => {
        content = response[0].data.map((item) => {
          return (
            <div key={item.timeCreated}>
              <VerifyBlog data={item}></VerifyBlog>
            </div>
          );
        });
        setPostsOwner(content);

        setPostIdList(() => {
          if (Object.keys(response[0].data).lenght == 0) {
            return [];
          } else if (Object.keys(response[0].data).lenght == 1) {
            return [response[0].data[0].postId];
          } else {
            return response[0].data.map((item) => {
              return item.postId;
            });
          }
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(
    () => {
      console.log(ORDER_USER_URL.concat(auth.user));
      Promise.all([axios.get(ORDER_USER_URL.concat(auth.user))])
        .then((response) => {
          console.log("stage 1");
          console.log(response[0].data[0].postId);

          let buyerPostlist = [];
          let validateBuyerPostlist = [];

          if (Object.keys(response[0].data).lenght == 0) {
            buyerPostlist = [];
          } else if (Object.keys(response[0].data).lenght == 1) {
            buyerPostlist = [response[0].data[0].postId];
          } else {
            buyerPostlist = response[0].data.map((item) => {
              return item.postId;
            });
          }

          let postList = postIdList.map((list) => {
            if (typeof list != String) {
              return list.toString();
            } else {
              return list;
            }
          });

          buyerPostlist = buyerPostlist.map((list) => {
            if (typeof list != String) {
              return list.toString();
            } else {
              return list;
            }
          });

          console.log(postList);
          console.log(buyerPostlist);

          for (let i in buyerPostlist) {
            if(!postList.includes(buyerPostlist[i])){
              postList.push(buyerPostlist[i])
              validateBuyerPostlist.push(buyerPostlist[i])
              console.log(buyerPostlist[i])
            }
          }

          setListBuyerPostId(validateBuyerPostlist);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    [postsOwner],
    []
  );

  useEffect(() => {
    console.log("is list buyer", listBuyerPostId);
    if (listBuyerPostId.length != 0) {
      console.log("stage 2");
      setListURL(() => {
        if (listBuyerPostId.length == 0) {
          return [];
        } else if (listBuyerPostId.lenght == 1) {
          return [POST_POSTID_URL + postId.toString()];
        } else {
          return listBuyerPostId.map((postId) => {
            return POST_POSTID_URL + postId.toString();
          });
        }
      });
    }
  }, [listBuyerPostId]);

  useEffect(() => {
    if (listURL.length != 0) {
      console.log("stage 3");
      console.log(listURL);
      axios
        .all(listURL.map((endpoint) => axios.get(endpoint)))
        .then((response) => {
          content = response.map((item) => {
            console.log(item.data[0]);
            return (
              <div key={item.data[0].timeCreated}>
                <VerifyBlog data={item.data[0]}></VerifyBlog>
              </div>
            );
          });
          setPostsBuyer(content);
        });
    }
  }, [listURL]);

  return (
    <div className="w-screen h-screen">
      <div className="mt-36 flex flex-col gap-y-3">
        {postsBuyer}
        {postsOwner}
      </div>
    </div>
  );
}

export default OrderStatus;
