import React, { useEffect, useContext, useState } from "react";
import { Context } from "../App";


export const Dashboard = () => {
  // const [auth, setAuth] = useState();
  // const [code, setCode] = useState();
  // const [reject, setReject] = useState();
  //  localStorage.removeItem("token")

  // const getAuth = () => {
  //   fetch('http://localhost:8080/api/auth', {
  //     method: "GET",
  //     credentials: "include",
  //   }).then(res => {
  //     if (!res.ok) { // error coming back from server
  //       throw Error('could not fetch the data for that resource');
  //     }
  //     return res.json();
  //   }).then(data => {
  //     console.log(data)
  //     localStorage.setItem("token", true)
  //     window.location.href = data.url;

  //   })
  // }
  const {
    applicant,
    setApplicant
  } = useContext(Context);


console.log(applicant)

  useEffect(() => {

    const handleLogin = async () => {
      // console.log(localStorage.token)
      const response = await fetch("http://localhost:8080/api/auth", {
        method: "GET",
        credentials: "include",
      });
      const data = await response.json();
      if (!response.ok) throw new Error("Something went wrong");
      window.location.href = data.url;
    };

    handleLogin();
  }, []);


  const handleGetDeals = async () => {
    const response = await fetch("http://localhost:8080/api/deals", {
      method: "GET",
      headers: {
        authorization: `${window.localStorage.getItem("access_token")}`,
      },
    });

    const data = await response.json();

    if (!response.ok) throw new Error(JSON.stringify(data));

    console.log(data);
  };



  return (
    <>


      <div>



        {/* 
        <button onClick={handleLogin}>Login</button>

        <button onClick={handleGetDeals}>Get Deals</button>

        <button onClick={handleSingleContact}>Get Single Contact</button>

        <div>
          <input onChange={() => console.log} value={singleContact ? singleContact.Email : "Waley pa value"} />
        </div> */}
        <div>

          { }
        </div>


      </div>
    </>
  );
};
