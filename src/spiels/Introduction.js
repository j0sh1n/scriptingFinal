import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

const Introduction = () => {
  const navigate = useHistory();
  const [value, setValue] = useState(0);

  //page increment
  const [script, setScript] = useState();

  const [count, setCount] = useState(0);

  function adjustCount(page) {
    setCount((currentCount) => {
      return currentCount + page;
    });
  }

  useEffect(() => {
    if (count === 0) {
      setScript("Hi Goodmorning/ afternoon! This is {recruiterName} from ePerformax BPO Contact Centers and BPO. Is this {firstName lastName}? I would love to take 15 minutes of your time to see if ePerformax is a great fit for you");
    } else if (count === 1) {
      setScript("Great! This is how its going to work: First, Im going to ask a few questions to get to know you Second, we will discuss your previous work experience. As we go along, I will let you know what the what the next steps are. Does that sound ok?");
    } else if (count === 2) {
      navigate.push("/dataPrivacy");
      setValue(2);
    }
  }, [count]);




  return (
    <div className="content flex-c center">
      <h1>Introduction</h1>

      <p>{script}</p>

      <div className="page flex-h ">
        <div className={count === 0 ? "disabled" : "button1"}>
          <button disabled={count === 0} onClick={() => adjustCount(-1)}>
            Back
          </button>
        </div>

        <div className="button1">
          <button onClick={() => adjustCount(+1)}>Next</button>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
