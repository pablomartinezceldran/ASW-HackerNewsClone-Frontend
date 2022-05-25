import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar(props) {
  return (
    <div className='navigation'>
      <nav className='navbar'>
        <div className='container'>
          <div className='title'>
            <img src='/y18.jpeg' alt='icon' />
            <NavLink to='/'>Hacker News</NavLink>
          </div>
          <div>
            <NavLink className='nav-link' to='/newest'>
              {props.current === "newest" ? (
                <div className='current'>new</div>
              ) : (
                <div>new</div>
              )}
            </NavLink>
            |
            <NavLink className='nav-link' to='/submit'>
              {props.current === "submit" ? (
                <div className='current'>submit</div>
              ) : (
                <div>submit</div>
              )}
            </NavLink>
            |
            <NavLink className='nav-link' to='/users/Pablo/comments'>
              {props.current === "threads" ? (
                <div className='current'>threads</div>
              ) : (
                <div>threads</div>
              )}
            </NavLink>
            |
            <NavLink className='nav-link' to='/ask'>
              {props.current === "ask" ? (
                <div className='current'>ask</div>
              ) : (
                <div>ask</div>
              )}
            </NavLink>
            |
            <NavLink className='nav-link' to='/users/Pablo'>
              {props.current === "user" ? (
                <div className='current'>Pablo</div>
              ) : (
                <div>Pablo</div>
              )}
            </NavLink>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
