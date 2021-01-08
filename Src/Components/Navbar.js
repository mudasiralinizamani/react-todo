import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { DiTechcrunch } from "react-icons/di";

import css from "../Assets/CSS/Navbar.module.css";

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className={css.navbar}>
        <div className={`${css["navbar-container"]} ${css.container}`}>
          <Link to="/" className={css["navbar-logo"]} onClick={closeMobileMenu}>
            <DiTechcrunch className={css["navbar-icon"]} />
            TIDO
          </Link>
          <div className={css["menu-icon"]} onClick={handleClick}>
            {click ? <FaTimes /> : <FaBars />}
          </div>
          <ul
            className={
              click ? `${css["nav-menu"]} ${css.active}` : css["nav-menu"]
            }
          >
            <li className={css["nav-item"]}>
              <Link
                to="/"
                className={css["nav-links"]}
                onClick={closeMobileMenu}
              >
                Home
              </Link>
            </li>
            <li className={css["nav-item"]}>
              <Link
                to="/about/"
                className={css["nav-links"]}
                onClick={closeMobileMenu}
              >
                About
              </Link>
            </li>
            {/* <li className='nav-item'>
                <Link
                  to='/services'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  Services
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  to='/products'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  Products
                </Link>
              </li> */}
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
