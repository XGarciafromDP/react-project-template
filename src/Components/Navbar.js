import React from "react";

function Navbar() {
  return (
    <nav class="navbar">
      <div class="navbar__containter">
        <a href="/" id="navbar__logo">
          <i class="fas fa gem"></i>NYC Stay Safe
        </a>
        <div class="navbar__toggle" id="mobile-menu">
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
        </div>
        <ul class="navbar__menu">
          <li class="navbar__item">
            <a href="/" class="navbar__links">
              Home
            </a>
          </li>
          <li class="navbar__item"></li>
          <li class="navbar__btn">
            <a href="/" class="button">
              Sign Up
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
