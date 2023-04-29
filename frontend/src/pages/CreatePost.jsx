import React, { Component } from "react";

import CreatePostForm from "../components/createPost";

class CreatePost extends Component {
  render() {
    return (
      <div className="flex items-center justify-center h-screen bg-amber-400">
        <CreatePostForm></CreatePostForm>
      </div>
    );
  }
}

export default CreatePost;
