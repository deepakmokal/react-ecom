import React from "react";
import { NavLink } from "react-router-dom";
import "../assets/css/scss/components/_nav.scss";

const PreNav = () => {
  return (
    <>
      <div className="nav-container">
      <ul className="nav-container">
        <li>
          <NavLink  to="/new">New</NavLink>
        </li>
        <li>
          <NavLink className='' to="/preowned">Pre-Owned</NavLink>
        </li>
      </ul>
      </div>
    </>
  );
};

export default PreNav;
