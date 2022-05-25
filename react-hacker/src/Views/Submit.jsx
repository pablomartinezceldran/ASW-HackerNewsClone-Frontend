import React from "react";
import Navbar from "../components/Navbar";
import SubmitForm from "../components/SubmitForm";
import "./Submit.css";

function Submit() {
  return (
    <table>
      <tbody>
        <tr>
          <td>
            <Navbar current='submit' />
          </td>
        </tr>
        <tr>
          <td>
            <SubmitForm />
          </td>
        </tr>
      </tbody>
    </table>
  );
}
export default Submit;
