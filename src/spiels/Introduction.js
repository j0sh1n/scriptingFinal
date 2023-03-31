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
      setScript(
        "Hi Goodmorning/ afternoon! This is {recruiterName} from ePerformax BPO Contact Centers and BPO. Is this {firstName lastName}? I would love to take 15 minutes of your time to see if ePerformax is a great fit for you"
      );
    } else if (count === 1) {
      setScript(
        "Great! This is how its going to work: First, Im going to ask a few questions to get to know you Second, we will discuss your previous work experience. As we go along, I will let you know what the what the next steps are. Does that sound ok?"
      );
    } else if (count === 2) {
      navigate.push("/dataprivacy");
      setValue(2);
    }
  }, [count]);




const data ={
  refresh_token : `${process.env.REACT_APP_REFRESH_TOKEN}`,
  client_id : `${process.env.REACT_APP_CLIENT_ID}`,
  client_secret : `${process.env.REACT_APP_CLIENT_SECRET}`,
  grant_type: `${process.env.REACT_APP_GRANT_TYPE}`
}


  useEffect(() => {
    fetch(`https://bigin-request.azurewebsites.net/api/HttpTrigger1?deals=yes&token=1000.13a5ea576a45cad259cf1522d9bbc223.f991d7bc51d223aa7612e95c8ee290a2`, {
      method: "GET",
      mode: "no-cors",
      headers: {
        "Cache-Control":"default",
        "Postman-Token":"",
        "Host":"",
        "User-Agent":"PostmanRuntime/7.31.3",
        "Accept":"*/*",
        "Accept-Encoding":"gzip, deflate, br",
        "Connection":"keep-alive",
            },
      //body: JSON.stringify(data)
    })
      // fetch(`https://www.zohoapis.com/bigin/v1/Deals`, {
      //   method: "GET",
      //   dataType: "JSONP",
      //   mode: "no-cors",
      //   headers: {
      //     Authorization:
      //       "Zoho-oauthtoken 1000.1000.461f5c9dfced9fa5f67bd6909900c36f.dae23f0b2e77797b599a062bca4a2c6e",
      //   },
      //   "Access-Control-Allow-Origin": "*",
      //   "Content-type": "Application/json",
      // })
      .then((response) => {
        console.log(response);
      })
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

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
