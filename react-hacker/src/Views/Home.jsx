import React from "react";
import Navbar from "../components/Navbar";
import Submissions from "../components/Submissions";
import "./Home.css";

function Home() {
  return (
    <table>
      <tbody>
        <tr>
          <Navbar />
        </tr>
        <tr>
          <Submissions order='votes' />
        </tr>
      </tbody>
    </table>
  );
}
export default Home;
