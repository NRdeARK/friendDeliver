import React from "react";
import PostBlog from "../components/PostBlog";
import { Link } from "react-router-dom";

function OpenPost() {
  return (
    <div>
      cl
      {/* <div className=" h-14"></div>
      <div className=" h-4"></div> */}
      <Link to="/createPost" className="flex justify-end mr-24">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-16 h-16 bg-white rounded-full p-0 mt-16 shadow-md"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </Link>
      <PostBlog></PostBlog>
    </div>
  );
}

export default OpenPost;
