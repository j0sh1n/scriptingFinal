import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

const FormerEmployee = () => {
  //page increment
  const [formerEmployee, setFormerEmployee] = useState();

  const navigate = useHistory();

  return (
    <div className="content flex-c center">
      <h1>Former Employee</h1>

      <p>Have you trained or been employed with us before?</p>
      <br />
      <div className="button2 flex-h justify">
        <button onClick={() => setFormerEmployee('yes')} className={formerEmployee ===  'yes' ? "selected" : "unselected"}>Yes</button>

        <button onClick={() => setFormerEmployee('no')} className={formerEmployee ===  'no' ? "selected" : "unselected"}>No</button>
      </div>
      {formerEmployee === 'yes' && (
        <div className="circ">
          <br />
          <label htmlFor="">
            Indicate the reason you left and separation date <br />
            <input type="text" />
          </label>
        </div>
      )}

      <div className="page flex-h button1"></div>

      <div className="page flex-h ">
        <div className="button1">
          <button onClick={() => navigate.push("/personalInformation")}>
            Back
          </button>
        </div>

        <div className={!formerEmployee ? "disabled" : "button1"}>
          <button
            disabled={!formerEmployee}
            onClick={() => navigate.push("/callCenterAgent") }
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default FormerEmployee;
