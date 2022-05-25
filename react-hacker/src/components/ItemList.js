import React from "react";
import Submission from "./Submission";
import Comment from "./Comment";
import "./Submissions.css";

function ItemList(props) {
  return (
    <table>
      <tbody>
        {props.subs &&
          props.subs.map((sub, i) => (
            <tr className='sub' key={i}>
              <td className='numAndVote'>{i + 1}.</td>
              <td className='con'>
                <Submission
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
        {props.comms &&
          props.comms.map((comm, i) => (
            <tr className='sub' key={i}>
              <td className='numAndVote'>{i + 1}.</td>
              <td className='con'>
                <Comment
                  id={comm._id}
                  text={comm.text}
                  votes={comm.votes}
                  createdAt={comm.createdAt}
                />
              </td>
            </tr>
          ))}
        {props.lsubs &&
          props.lsubs.map((sub, i) => (
            <tr className='sub' key={i}>
              <td className='numAndVote'>{i + 1}.</td>
              <td className='con'>{sub}</td>
            </tr>
          ))}
        {props.lcomms &&
          props.lcomms.map((comm, i) => (
            <tr className='sub' key={i}>
              <td className='numAndVote'>{i + 1}.</td>
              <td className='con'>{comm}</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
}
export default ItemList;
