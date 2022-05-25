import React, { useState } from "react";
import Navbar from "../components/Navbar";
import User from "../components/User";
import { getUserInfo } from "../APIcalls";
import ItemList from "../components/ItemList";
import "./Home.css";

function UserInfo(props) {
  const [user, setUser] = useState([]);

  getUserInfo(props.username).then((response) => {
    setUser(response);
  });
  return (
    <table>
      <tbody>
        <tr>
          <td>
            <Navbar />
          </td>
        </tr>
        <tr>
          {props.info === "main" && (
            <td>
              <User
                username={user.username}
                createdAt={user.createdAt}
                about={user.about}
              />
            </td>
          )}
          {props.info === "subs" && (
            <td>
              <ItemList subs={user.submissions} />
            </td>
          )}
          {props.info === "comms" && (
            <td>
              <ItemList comms={user.comments} />
            </td>
          )}
          {props.info === "lsubs" && (
            <td>
              <ItemList lsubs={user.likedsubmissions} />
            </td>
          )}
          {props.info === "lcomms" && (
            <td>
              <ItemList lcomms={user.likedcomments} />
            </td>
          )}
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
export default UserInfo;
