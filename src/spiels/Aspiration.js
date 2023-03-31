import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

const Aspiration = () => {
  const navigate = useHistory();
  const [value, setValue] = useState("0");
  const [script, setScript] = useState("");

  useEffect(() => {
    if (value === "breadwinner") {
      setScript(
        "I understand how frustrating that can be, I'm the bread winner at home as well and know how difficult it can be be to find a great job"
      );
    } else if (value === "money") {
      setScript(
        "I understand how frustrating that can be, before ePerformax I was working a job the that didnt pay much"
      );
    } else if (value === "caresAboutMe") {
      setScript(
        "We know how important it is to have a job where you can feel like you belong. At ePerformax we work hard, but we also treat our people like family"
      );
    } else if (value === "englishSkill") {
      setScript(
        "We are always training and improving our skills here at ePerformax and I can definitely tell you how my life is better after going through the training"
      );
    } else if (value === "promotion") {
      setScript(
        "We know how important a career path is to our people which is why 95% of our leadership roles are promoted from our own people"
      );
    } else if (value === "notHappy") {
      setScript(
        "We are always training and improving our skills here at ePerformax and I can definitely tell you how my life is better after going through the training"
      );
    } else if (value === "leader") {
      setScript(
        "We know how important it is to have a job where you grow into a leader. At ePerformax 95% of who we hire are leaders from within"
      );
    } else if (value === "stability") {
      setScript(
        "I understand how frustrating that can be, before ePerformax I jumped from job to job until I found ePerformax"
      );
    }
  }, [value]);

  return (
    <div className="content flex-c center">
      <h1>Aspiration</h1>
      <div className="maincontent flex-c">
        <p>
          What made you interested to apply at ePerformax? <br /> <br /> And
          what would make you join/stay with us?
        </p>
        <br />
        <p>
          <i>
            {" "}
            Identify the specific aspiration/want and use the appropriate
            aspiration statement.
          </i>
        </p>{" "}
        <br />
        <p>If your own story is similar to theirs, let them know!</p> <br />
        <select onChange={(e) => setValue(e.target.value)}>
          <option value="0" hidden selected >
            Select aspiration
          </option>
          <option value="breadwinner">Bread Winner</option>
          <option value="money">Money</option>
          <option value="caresAboutMe">Cares About Me</option>
          <option value="englishSkill">English Skill</option>
          <option value="promotion">Promotion</option>
          <option value="notHappy">Not Happy</option>
          <option value="leader">Leader</option>
          <option value="stability">Stability</option>
        </select>
        <br />
      </div>
      <b>Aspiration script:</b>

      <div className="subcontent">
        {value && (
          <p>
            {" "}
            <br /> <br /> {script}
          </p>
        )}
      </div>

      <div className="page flex-h button1"></div>

      <div className="page flex-h ">
        <div className="button1">
          <button onClick={() => navigate.push("/amenability")}>Back</button>
        </div>
        <div className={!value ? "disabled" : "button1"}>
          <button
            disabled={!value}
            onClick={() => navigate.push("/qualification")}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Aspiration;
