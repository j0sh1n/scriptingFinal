import React, { useState } from "react";

import { Link } from "react-router-dom";

const Spiels = () => {
  const [value, setValue] = useState(0);


  return (
    <div className="spiels flex-c">
      <h1>Spiels</h1>
      <ol>
        <li >
          <Link to="/" onClick={()=>setValue(1)} className={value ===  1 ? "selected" : ""}>
            Introduction
          </Link>
        </li>
        <li >
          <Link to="/dataPrivacy"onClick={()=>setValue(2)} className={value === 2 ? "selected" : ""}>
            Data Privacy
          </Link>
        </li>
        <li >
          <Link to="/personalInformation"onClick={()=>setValue(3)} className={value === 3 ? "selected" : ""}>
            Personal Information
          </Link>
        </li>
        <li >
          <Link to="/formerEmployee"onClick={()=>setValue(4)} className={value === 4 ? "selected" : ""}>
            Former Employee
          </Link>
        </li>
        <li >
          <Link to="/education"onClick={()=>setValue(5)} className={value === 5 ? "selected" : ""}>
            Education
          </Link>
        </li>
        <li >
          <Link to="/callCenterAgent" onClick={()=>setValue(6)} className={value === 6 ? "selected" : ""}>
            Call Center Agent
          </Link>
        </li>
        <li >
          <Link to="/amenability"onClick={()=>setValue(7)} className={value === 7 ? "selected" : ""}>
            Amenability
          </Link>
        </li>
        <li >
          <Link to="/aspiration"onClick={()=>setValue(8)} className={value === 8 ? "selected" : ""}>
            Aspiration
          </Link>
        </li>
        <li >
          <Link to="/qualification" onClick={()=>setValue(9)} className={value === 9 ? "selected" : ""}>
            Qualification
          </Link>
        </li>
      </ol>
    </div>
  );
};

export default Spiels;
