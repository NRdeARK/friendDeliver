import React, { useId, Component } from "react";

import CreatePostForm from "../components/createPost";

class CreatePost extends Component {
  render() {
    return (
      <div className="flex items-center justify-center h-screen">
        <CreatePostForm></CreatePostForm>
      </div>
    );
  }
}

export default CreatePost;
