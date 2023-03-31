import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

const FormerEmployee = () => {
  //page increment
  const [value, setValue] = useState("");

  const navigate = useHistory();

  return (
    <div className="content flex-c center">
      <h1>Former Employee</h1>

      <p>Have you trained or been employed with us before?</p>
      <br />
      <div className="button2 flex-h justify">
        <button onClick={() => setValue("Yes")}>Yes</button>

        <button onClick={() => setValue("No")}>No</button>
      </div>
      {value === "Yes" && (
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

        <div className={!value ? "disabled" : "button1"}>
          <button
            disabled={!value}
            onClick={() => navigate.push("/callCenterAgent")}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default FormerEmployee;
