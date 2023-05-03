import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const DataPrivacy = () => {
  const navigate = useHistory();

  const [dataPrivacy, setDataPrivacy] = useState(false);
  const handleChange1 = (e) => {
    setDataPrivacy(e.target.checked);
  };

  return (
    <div className="content flex-c center">
      <h1>Data Privacy</h1>

      <p>
        I would like to ask for your permission to get your personal data, work
        experiences, and other information that are relevant to your
        application. this call is recorded for quality and training is that
        okay?
      </p>
      <br />
      <label>
        <input type="checkbox" value={dataPrivacy} onChange={handleChange1} />{" "}
        AGREE
      </label>
      <br />

      <div className="page flex-h ">
        <div className="button1">
          <button onClick={() => navigate.push("/redirect")}>Back</button>
        </div>

        <div className={!dataPrivacy ? "disabled" : "button1"}>
          <button
            disabled={!dataPrivacy}
            onClick={() => navigate.push("/personalInformation")}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default DataPrivacy;
