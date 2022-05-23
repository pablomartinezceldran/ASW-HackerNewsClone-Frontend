import React, { useState } from "react";
import { getSubmissions } from "../APIcalls";
import Submission from "./Submission";
import LikeButton from "./LikeButton";
import "./Submissions.css";

function Submissions() {
  const [subs, setSubs] = useState([]);

  getSubmissions("votes").then((response) => {
    setSubs(response);
  });

  return (
    <table>
      {subs.map((sub, i) => (
        <tr className='sub' key={i}>
          <td className='numAndVote'>
            {i + 1}. <LikeButton />
          </td>
          <td className='con'>
            <Submission
              numSub={i + 1}
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
    </table>
  );
}

export default Submissions;
