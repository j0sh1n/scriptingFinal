import React, { useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";

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

  const navigate = useHistory();


  // console.log(applicant)

  useEffect(() => {

    const handleLogin = async () => {
      // console.log(localStorage.token)
      const response = await fetch(`${process.env.REACT_APP_API_URL}/api/bigin/login`, {
        method: "GET",
      });
      const data = await response.json();
      if (!response.ok) throw new Error("Something went wrong");
      window.location.href = data.url;
    };
    handleLogin()
  }, []);

  return (
    <>

    </>
  );
};
