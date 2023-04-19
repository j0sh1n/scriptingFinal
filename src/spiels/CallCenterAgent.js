import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const CallCenterAgent = () => {
  //page increment
  const [fCCA, setFCCA] = useState();
  const [workXp, setWorkXp] = useState();

  const navigate = useHistory();

  return (
    <div className="content flex-c center">
      <h1>Call Center Agent</h1>
      <div className="maincontent center">
        <p>
          Thanks for sharing some of your details <br />
          <br /> Let's talk about your work experience <br />
          <br /> Have you worked in call center before?
        </p>
        <br />

        <div className="button2 flex-h justify">
          <button
            onClick={() => {
              setFCCA("Yes");
              setWorkXp();
            }}
            className={fCCA === 'Yes' ? "selected" : "unselected"}
          >
            Yes
          </button>
          <button
            onClick={() => {
              setFCCA("No");
              setWorkXp();
            }}
            className={fCCA === 'No' ? "selected" : "unselected"}

          >
            No
          </button>
        </div>
        <br />
      </div>

      {fCCA === "Yes" && (
        <div className="subcontent input">
          <input type="text" /> Who did you work for? Which company?
          <br />
          <input type="text" /> How long have you worked there?
          <br />
          <input type="text" /> What account/service?
          <br />
          <input type="text" /> What did you like most about that job?
          <br />
          <input type="text" /> What you dont like about that job
          <br />
          <input type="text" /> Does that job allow you to provide for your
          family? (get compensation?)
          <br />
          <input type="text" /> How come you left / How come you are deciding to
          leave?
        </div>
      )}

      {fCCA === "No" && (
        <div className="subcontent button2">
          <p> Do you have other work experience?</p>
          <div className="selection flex-h justify">
            
            <button onClick={() => setWorkXp("Yes")} className={workXp === 'Yes' ? "selected" : "unselected"}>Yes</button>
            <button onClick={() => setWorkXp("No")} className={workXp === 'No' ? "selected" : "unselected"}>No</button>
          </div>
        </div>
      )}

      {workXp === "Yes" && (
        <div className="subcontent input">
          <p>
            <input type="text" /> Tell me about the most recent?
            <br />
            <input type="text" /> Who did you work for?
            <br />
            <input type="text" /> How long? What role?
            <br />
            <input type="text" /> Reason for leaving? Compensation.
          </p>
        </div>
      )}
      {workXp === "No" && (
        <div className="subcontent input">
          <p>
            <input type="text" /> What do you know about the Call Center
            industry?
          </p>
        </div>
      )}

      <div className="page flex-h ">
        <div className="button1">
          <button onClick={() => navigate.push("/education")}>Back</button>
        </div>

        <div className={!fCCA ? "disabled" : "button1"}>
          <button
            disabled={!fCCA}
            onClick={() => navigate.push("/amenability")}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default CallCenterAgent;
