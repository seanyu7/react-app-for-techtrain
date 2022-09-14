import React from "react";
import "./post.css";

const Post = () => {
  return (
    <div className="post">
      <div className="postContainer">
        <h1>Creating a new title</h1>
        <div className="inputPost">
          <div>Title</div>
          <input type="text" placeholder="Put in your title here"/>
          <button>click</button>
        </div>
      </div>
    </div>
  );
};

export default Post;
