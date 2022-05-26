import React, { useState } from "react";
import { comment, getSubmission } from "../APIcalls";
import Comment from "./Comment";
import "./Submission.css";

function CompleteSubmission(props) {
  const [sub, setSub] = useState([]);

  getSubmission(props.submissionId).then((response) => {
    setSub(response);
  });

  function addComment() {
    // console.log(document.getElementById("comment").value);
    // console.log(props.submissionId);
    comment(props.submissionId, document.getElementById("comment").value);
  }

  let linkUser = "/user/" + sub.user;

  return (
    <table style={{ backgroundColor: "#f6f6ef" }}>
      <tbody>
        <tr>
          <td>
            <br />
          </td>
        </tr>
        <tr>
          <td className='titleAndUrl'>
            <p style={{ color: "#000000" }}>{sub.title}</p>
            <a className='url' href={sub.url} target='_blank' rel='noreferrer'>
              ({sub.url})
            </a>
          </td>
        </tr>
        <tr>
          <td>
            <div className='otros'>
              {sub.votes} votes | by <a href={linkUser}> {sub.user}</a>| {sub.createdAt}
            </div>
          </td>
        </tr>
        <tr>
          <td>
            <textarea name='comment' id='comment' cols='30' rows='10'></textarea>
          </td>
        </tr>
        <tr>
          <td>
            <button onClick={addComment}>Add Comment</button>
          </td>
        </tr>
        {sub.commentTree &&
          sub.commentTree.map((comm, i) => (
            <tr key={i} className='space'>
              <td className={"prof" + comm.profunditat}>
                <Comment
                  id={comm._id}
                  text={comm.text}
                  votes={comm.votes}
                  createdAt={comm.createdAt}
                />
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
}

export default CompleteSubmission;
