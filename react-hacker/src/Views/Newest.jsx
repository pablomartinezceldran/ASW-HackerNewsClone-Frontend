import React from "react";
import Navbar from "../components/Navbar";
import Submissions from "../components/Submissions";
import "./Home.css";

function Newest() {
  return (
    <table>
      <tbody>
        <tr>
          <td>
            <Navbar />
          </td>
        </tr>
        <tr>
          <td>
            <Submissions order='creation' />
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
export default Newest;
