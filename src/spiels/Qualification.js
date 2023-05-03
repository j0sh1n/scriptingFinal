import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const Qualification = () => {
  const navigate = useHistory();
  const [value, setValue] = useState();
  const [script, setScript] = useState();
  return (
    <div className="content flex-c center">
      <h1>Qualification</h1>

      <p>Thank you for taking the time to talk with me today.</p>
      <br />
      <div className="button1 flex-h center" >      <button onClick={() => setScript()}>Qualified</button>
        <button onClick={() => setScript()}>Transfer</button>
        <button onClick={() => setScript()}>Unqualified</button></div>


      {script && <div></div>}
      <div className="page flex-h button1"></div>

      <div className="page flex-h ">
        <div className="button1">
          <button onClick={() => navigate.push("/aspiration")}>Back</button>
        </div>

        <div className="disabled">
          <button disabled onClick={() => navigate.push("/qualification")}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Qualification;
