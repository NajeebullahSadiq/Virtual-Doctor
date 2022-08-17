import React from "react";
import './Navbar.css';
function Navbar()
{
    return (
      <div>
        <nav class="nav">
          <div class="container">
            <div class="logo">
              <a href="#">
                <img src="/logo/logo.png" alt="logo" class="nav-logo"></img>
              </a>
            </div>
            <div id="mainListDiv" class="main_list">
              <ul class="navlinks">
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Services</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>
            </div>
            <span class="navTrigger">
              <i></i>
              <i></i>
              <i></i>
            </span>
          </div>
        </nav>
        <img src="/slides/pic10.jpg" className="bodyImage"></img>
      </div>
    );
}
export default Navbar;