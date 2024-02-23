import errorImg from "../../assets/images/page-not-found.svg";
import warningImg from "../../assets/images/warning.svg";
import { NavLink, useNavigate, useRouteError } from "react-router-dom";
import '../../assets/css/scss/pages/_error.scss';

import React from "react";

const Error = () => {
  const error = useRouteError();
  const navigate = useNavigate();

  if (error.status === 404)
    return (
      <div className="error-wrapper">
        <div>
          <img className="error-img" src={errorImg} />
        </div>
        <NavLink
          to="/"
          className="back-btn"
        >
          Back to Home
        </NavLink>
      </div>
    );

  return (
    <>
      <div className=" error-wrapper">
        <div>
          <img className="error-img" src={warningImg}  />
        </div>
        <button 
          onClick={() => navigate(-1)}
          className="back-btn"
        >
          Go To Back
        </button>
      </div>
    </>
  );
};

export default Error;
