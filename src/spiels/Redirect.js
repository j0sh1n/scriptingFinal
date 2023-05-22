import React, { useEffect, useContext, useState } from "react";
import {
  // useHistory,
  useLocation,
} from "react-router-dom";
import { Context } from "../App";

const Redirect = () => {
  //   const navigate = useHistory();

  const { applicant, setApplicant } = useContext(Context);

  const [contact, setContact] = useState(null);

  const [deal, setDeal] = useState(null);

  const location = useLocation();

  const handleSingleContact = async () => {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/api/contacts/${localStorage.contactId}`,
      {
        method: "GET",
        headers: {
          authorization: `${window.localStorage.getItem("access_token")}`,
        },
      }
    );

    const data = await response.json();

    if (!response.ok) throw new Error(JSON.stringify(data));
    setApplicant(data.data[0]);
    console.log(data);

    setContact(data.data[0]);
  };

  const handleSingleDeal = async () => {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/api/bigin/deals/${localStorage.dealId}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_ACCESS_TOKEN}`, //`${window.localStorage.getItem("access_token")}`,
        },
      }
    );
    // console.log(`${process.env.REACT_APP_ACCESS_TOKEN}`);
    // console.log(`${process.env.REACT_APP_API_URL}/api/bigin/deals/${localStorage.dealId}`);
    const data = await response.json();    
    // console.log(data, "SHOULD BE THE DEAL",deal.deal[0]);
    setDeal(data.data[0]);
console.log(data.data[0]);
    if (!response.ok) throw new Error(JSON.stringify(data));
    setApplicant(data.data[0]);
    localStorage.setItem("contactId", data.data[0].Contact_Name.id);
  };

  const generateToken = async () => {
    //code
    const searchParams = new URLSearchParams(location.search);
    const code = searchParams.get("code");
    console.log(code);

    //get access token
    const tokenResponse = await fetch(
      `${process.env.REACT_APP_API_URL}/api/bigin/tokens?code=${code}`,
      {
        method: "GET",
        credentials: "include",
      }
    );
    const tokenData = await tokenResponse.json();
    if (!tokenResponse.ok)
      throw new Error("No token found", { cause: tokenData });
    console.log({
      access_token: tokenData.access_token,
    });
    //session http only
    if (tokenData.access_token)
      localStorage.setItem("access_token", tokenData.access_token);
    if (tokenData.refresh_token)
      localStorage.setItem("refresh_token", tokenData.refresh_token);
  };

  useEffect(() => {
    // generateToken();
    handleSingleDeal();
    // handleSingleContact();
  }, []);

  // if (applicant )navigate.push("/introduction");

  return <></>;
};

export default Redirect;
