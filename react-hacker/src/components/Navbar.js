import React, { useState } from "react";
import { Link } from "react-router-dom";
import './Navbar.css'

function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMenu = () => setClick(false);
  return (
    <>
      <nav className="navbar">
        <div className="navbar-content">
          <Link to="/" className="navbar-logo">
            HackerNews <i className="fab fa-typo3" />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fa fa-times" : "fa fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMenu}>
                Index
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/newest" className="nav-links" onClick={closeMenu}>
                Newest
              </Link>
            </li>
              <li className="nav-item">
                <Link to="/submit" className="nav-links" onClick={closeMenu}>
                  Submit
                </Link>
              </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
