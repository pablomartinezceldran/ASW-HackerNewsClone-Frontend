import React from "react";

import "./User.css";

function User(props) {
  return (
    <table className='body'>
      <tbody>
        <tr>
          <td>
            <br />
          </td>
        </tr>
        <tr>
          <td width={"130px"}>user:</td>
          <td>{props.username}</td>
        </tr>
        <tr>
          <td>created at:</td>
          <td>{props.createdAt}</td>
        </tr>
        <tr>
          <td>about:</td>
          <td>
            <textarea
              name='about'
              id='about'
              cols='50'
              rows='5'
              defaultValue={props.about}
            ></textarea>
          </td>
        </tr>
        <tr>
          <td>
            <a href='/users/Pablo/submissions'>Submissions</a>
          </td>
        </tr>
        <tr>
          <td>
            <a href='/users/Pablo/comments'>Comments</a>
          </td>
        </tr>
        <tr>
          <td>
            <a href='/users/Pablo/likedSubmissions'>Liked Submissions</a>
          </td>
        </tr>
        <tr>
          <td>
            <a href='/users/Pablo/likedComments'>Liked Comments</a>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default User;
