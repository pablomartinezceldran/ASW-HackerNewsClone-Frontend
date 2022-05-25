import React from "react";
import { useParams } from "react-router-dom";
import CompleteSubmission from "../components/CompleteSubmission";
import Navbar from "../components/Navbar";
import "./Home.css";

function Submission(props) {
  const { submissionId } = useParams();
  return (
    <table>
      <tbody>
        <tr>
          <td>
            <Navbar current='' />
          </td>
        </tr>
        <tr>
          <td>
            <CompleteSubmission submissionId={submissionId} />
          </td>
        </tr>
        <tr>
          <td>
            <center>
              <h4> Hacker News FIB 2022 </h4>
            </center>
          </td>
        </tr>
      </tbody>
    </table>
  );
}
export default Submission;
