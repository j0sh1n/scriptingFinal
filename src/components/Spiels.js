import React from "react";

import { Link, useLocation } from "react-router-dom";

const Spiels = () => {
  const location = useLocation();

  return (
    <div className="spiels flex-c">
      <h1>Spiels</h1>
      <ol>
        <li >
          <Link to="/redirect" className={location.pathname === '/redirect' ? "selected" : ""}>
            Introduction
          </Link>
        </li>
        <li >
          <Link to="/dataPrivacy" className={location.pathname === '/dataPrivacy' ? "selected" : ""}>
            Data Privacy
          </Link>
        </li>
        <li >
          <Link to="/personalInformation" className={location.pathname === '/personalInformation' ? "selected" : ""}>
            Personal Information
          </Link>
        </li>
        <li >
          <Link to="/formerEmployee" className={location.pathname === "/formerEmployee" ? "selected" : ""}>
            Former Employee
          </Link>
        </li>
        <li >
          <Link to="/education" className={location.pathname === "/education" ? "selected" : ""}>
            Education
          </Link>
        </li>
        <li >
          <Link to="/callCenterAgent"  className={location.pathname === "/callCenterAgent" ? "selected" : ""}>
            Call Center Agent
          </Link>
        </li>
        <li >
          <Link to="/amenability"  className={location.pathname === "/amenability" ? "selected" : ""}>
            Amenability
          </Link>
        </li>
        <li >
          <Link to="/aspiration"  className={location.pathname === "/aspiration"? "selected" : ""}>
            Aspiration
          </Link>
        </li>
        <li >
          <Link to="/qualification"  className={location.pathname === "/qualification" ? "selected" : ""}>
            Qualification
          </Link>
        </li>
        
      </ol>
    </div>
  );
};

export default Spiels;
