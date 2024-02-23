import React from "react";
import { NavLink } from "react-router-dom";
import '../assets/css/scss/components/_nav.scss';

const Nav = () => {
  return (
    <>
      <ul className="nav-container">
        <li>
          <NavLink to="justin">Just In</NavLink>
        </li>
        <li>
          <NavLink to="brands">Brands</NavLink>
        </li>
        <li>
          <NavLink to="women">Women</NavLink>
        </li>
        <li>
          <NavLink to="men">Men</NavLink>
        </li>
        <li>
          <NavLink to="kids">Kids</NavLink>
        </li>
        <li>
        <NavLink to='watches'>Watches</NavLink>
      </li>
      </ul>

      {/* <Outlet /> */}
    </>
  );
};

export default Nav;
