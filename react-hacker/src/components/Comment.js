import React from "react";

function Comment(props) {
  return (
    <div className='content'>
      <div>{props.text}</div>
      <div className='content subtitle'>
        <div>Created at: {props.createdAt}</div>
        <div>{props.votes} votes</div>
      </div>
    </div>
  );
}

export default Comment;
