import React, { Component } from "react";
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5287/api/",
});

export default class AxiosTest extends Component {
  state = {
    posts: [],
  };

  constructor() {
    super();
    this.getPosts();
  }

  getPosts = async () => {
    let data = await api.get("/StorePostItems").then(({ data }) => data);
    this.setState({ post:data });
  };

  deletePost = async (id) => {
    await api.delete(`/${id}`);
    this.getPosts()
  };

  createPost = async () => {
    let res = await api.post("/StorePostItems", {
      postId: 0,
      storeId: 2,
      storeName: "C",
      userId: 0,
      username: 0,
      date: "string",
      pickupPlace: "string",
      endDate: "2023-04-07T08:37:31.144Z",
      maxOrder: 0,
      isOpen: true,
    });
    console.log(res);
    this.getPosts();
  };

  render() {
    return (
      <div>
        AxiosTest
        <div>
          {this.state.posts.map((post) => (
            <h2 key={post.StoreId}>
               {post.StoreName}
            </h2>
          ))}

        </div>
        <div>
        {/* <button
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={this.createPost()}
          >
            createPost
          </button>
          <button
            class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            onClick={this.deletePost(post.id)}
          >
            deletePost
          </button> */}
        </div>
      </div>
    );
  }
}
