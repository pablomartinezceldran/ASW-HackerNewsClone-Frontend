import React from "react";
import { Link } from "react-router-dom";
import "./Submission.css";

function Submission(props) {
  let linkSub = "/submissions/" + props.id;
  let linkUser = "/user/" + props.user;

  return (
    <div className='content'>
      <div className='titleAndUrl'>
        <p style={{ color: "#000000" }}>{props.title}</p>
        <a className='url' href={props.url} target='_blank' rel='noreferrer'>
          ({props.url})
        </a>
      </div>
      <div className='otros' style={{ color: "#000000" }}>
        {props.votes} votes | <a href={linkUser}> {props.user}</a>| {props.createdAt} |{" "}
        {props.numComments ? (
          <Link className='com' to={linkSub}>
            {props.numComments} comments
          </Link>
        ) : (
          <Link className='com' to={linkSub}>
            discuss
          </Link>
        )}
      </div>
    </div>
  );
}

export default Submission;
