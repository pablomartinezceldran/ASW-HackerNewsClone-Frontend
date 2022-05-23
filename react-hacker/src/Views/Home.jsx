import React from "react";
import Navbar from "../components/Navbar";
import Submissions from "../components/Submissions";
import "./Home.css";

function Home() {
  return (
    <table>
      <tr>
        <Navbar />
      </tr>
      <tr>
        <Submissions />
      </tr>
    </table>
  );
}
export default Home;
