import React, { useState } from "react";
import { getSubmissions, likeSubmission, unlikeSubmission } from "../APIcalls";
import Submission from "./Submission";

import "./Submissions.css";

function Submissions(props) {
  const [subs, setSubs] = useState([]);

  getSubmissions(props.order).then((response) => {
    setSubs(response);
  });

  function vote(subId) {
    likeSubmission(subId);
  }
  function unvote(subId) {
    unlikeSubmission(subId);
  }

  return (
    <table>
      <tbody>
        {subs.map((sub, i) => (
          <tr className='sub' key={i}>
            <td className='numAndVote'>
              <div style={{ color: "#000000" }}>{i + 1}.</div>
              <div className='content'>
                <button className='btn default' onClick={() => vote(sub._id)}>
                  Like
                </button>
                <button className='btn default' onClick={() => unvote(sub._id)}>
                  Dislike
                </button>
              </div>
            </td>
            <td className='con'>
              <Submission
                id={sub._id}
                title={sub.title}
                votes={sub.votes}
                createdAt={sub.createdAt}
                user={sub.user}
                url={sub.url}
                numComments={sub.numcomments}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Submissions;
