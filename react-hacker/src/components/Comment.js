import React from "react";

import { likeComment, unlikeComment, replyComment } from "../APIcalls";

function Comment(props) {
  function vote() {
    likeComment(props.id);
  }
  function unvote() {
    unlikeComment(props.id);
  }
  function showReplyForm() {
    let reply = prompt("Reply");
    if (reply !== null) replyComment(props.id, reply);
  }

  return (
    <div className='content'>
      <div style={{ color: "#000000" }}>{props.text}</div>
      <div className='content subtitle'>
        <div>Created at: {props.createdAt}</div>
        <div>
          <div>{props.votes} votes</div>
          <button className='btn default' onClick={vote}>
            Like
          </button>
          <button className='btn default' onClick={unvote}>
            Unlike
          </button>
          <button className='btn default' onClick={showReplyForm}>
            Reply
          </button>
        </div>
      </div>
    </div>
  );
}

export default Comment;
