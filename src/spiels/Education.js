import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

const Education = () => {
  const [education, setEducation] = useState("");
  const [extra, setExtra] = useState(false);
  const navigate = useHistory();

  return (
    <div className="content flex-c center">
      <h1>Education</h1>

      <p>What is the highest level of education have you completed?</p>
      <br />
      <div className="button2">
        <button
          onClick={() => {
            setEducation("In College");
            setExtra();
          }}
          className={ education ===  'In College' ? "selected" : "unselected"}
        >
          In College
        </button>
        <button
          onClick={() => {
            setEducation("Graduated");
            setExtra();
          }}
          className={ education ===  'Graduated' ? "selected" : "unselected"}

        >
          Graduated
        </button>
        <button
          onClick={() => {
            setEducation("Undergraduate");
            setExtra();
          }}
          className={ education ===  'Undergraduate' ? "selected" : "unselected"}

        >
          Undergraduate
        </button>
      </div>

      <div className="subcontent input center flex-c">
        {education === "In College" && (
          <div className="flex-c center">
            <p>Have you graduated? What degree/course/school?</p>
            <br />
            <input type="text" />
          </div>
        )}
        {education === "Graduated" && (
          <div className="flex-c center">
            <p>
              Do you have pending board exam/result/licensure exam? <br />
            </p>
            <input type="text" />
            <div className="button2">
              <button onClick={() => setExtra(true)} className={ extra ===  true ? "selected" : "unselected"}>Yes</button>
              <button onClick={() => setExtra(false)} className={ extra ===  false ? "selected" : "unselected"}>No</button>
            </div>
          </div>
        )}

        {extra && (
          <div className="flex-c center">
            <p> When and what are your plans?</p>
            <input type="text" />
          </div>
        )}
        {education === "Undergraduate" && (
          <div className="flex-c center">
            <p>
              {" "}
              What is your degree/course and your year level completed? Which
              school you attended?
            </p>
            <input type="text" />
          </div>
        )}
      </div>

      <br />

      <div className="page flex-h ">
        <div className="button1">
          <button onClick={() => navigate.push("/formerEmployee")}>Back</button>
        </div>

        <div className={!education ? "disabled" : "button1"}>
          <button
            disabled={!education}
            onClick={() => navigate.push("/callCenterAgent")}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Education;
