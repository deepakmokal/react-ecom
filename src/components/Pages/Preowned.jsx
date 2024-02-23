import React, { lazy } from "react";

const Nav = lazy(() => import("../Nav"));
const SearchInput = lazy(() => import("../SearchInput"));

import { Outlet } from "react-router-dom";
import "../../assets/css/scss/components/_header.scss";
import { Suspense } from "react";

const Preowned = () => {
  return (
    <>
      <div className="header-section">
        <div className="header-wrapper px-3">
          <Suspense fallback={<h3>Loading...</h3>}>
            <Nav />
            <SearchInput />
          </Suspense>
        </div>
      </div>

      <Outlet />
    </>
  );
};

export default Preowned;
