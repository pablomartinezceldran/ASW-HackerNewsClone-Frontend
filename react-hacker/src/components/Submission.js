import React from "react";
import LikeButton from "./LikeButton";
import "./Submission.css";

function Submission(props) {
  return (
    <div className='content'>
      <div className='titleAndUrl'>
        <p>{props.title}</p>
        <a className='url' href={props.url} target='_blank'>
          ({props.url})
        </a>
      </div>
      <div className='otros'>
        {props.votes} votes | <a href=''> {props.user}</a>| {props.createdAt} |{" "}
        {props.numComments ? (
          <a className='com' href=''>
            {props.numComments} comments
          </a>
        ) : (
          <a className='com' href=''>
            discuss
          </a>
        )}
      </div>
    </div>
  );
}

export default Submission;
