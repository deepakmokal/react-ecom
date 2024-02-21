import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <ul className=" flex justify-start gap-3">
        <li>
          <NavLink to="/">Blogs</NavLink>
        </li>
        <li>
          <NavLink to="/docs">Docs</NavLink>
        </li>
        <li>
          <NavLink to="/resources">Resources</NavLink>
        </li>
        <li>
          <NavLink to="/brand">Brand</NavLink>
        </li>
        <li>
          <NavLink to="/showcase">Showcase</NavLink>
        </li>
        <li>
        <NavLink to='/posts'>Posts</NavLink>
      </li>
      </ul>
    </>
  );
};

export default Nav;
