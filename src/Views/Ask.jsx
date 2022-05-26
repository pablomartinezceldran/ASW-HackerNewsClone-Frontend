import React from "react";
import Navbar from "../components/Navbar";
import Submissions from "../components/Submissions";
import "./Home.css";

function Ask() {
  return (
    <table>
      <tbody>
        <tr>
          <td>
            <Navbar current='ask' />
          </td>
        </tr>
        <tr>
          <td>
            <Submissions order='ask' />
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
export default Ask;
