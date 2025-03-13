import React from "react";
import "./Navbar.css";
import logo from "../../assets/logo.svg";
import search_icon from "../../assets/search-icon.png";
import bell_icon from "../../assets/bell-icon.png";
import avatar_img from "../../assets/avatar-img.png";
import down_icon from "../../assets/down-icon.png";

// import search_icon from "../../assets/search_icon.svg";
// import bell_icon from "../../assets/bell_icon.svg";
// import profile_icon from "../../assets/profile_icon.svg";
// import caret_icon from "../../assets/caret_icon.svg";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="" />
        <ul>
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movie</li>
          <li>New & Popular</li>
          <li>My List</li>
          <li>Browse by Languages</li>
        </ul>
      </div>
      <div className="navbar-right">
        <img src={search_icon} alt="" className="icons" />
        <p>Children</p>
        <img src={bell_icon} alt="" className="icons" />
        <div className="navbar-profile">
          <img src={avatar_img} alt="" className="avatar" />
          <img src={down_icon} alt="" />
          <div className="dropdown">
            <p>Sign Out of Netflix</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
