import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export const Dashboard = () => {
  const location = useLocation();

  const [singleContact, setSingleContact] = useState(null);

  useEffect(() => {
    const generateToken = async () => {
      const searchParams = new URLSearchParams(location.search);
      const code = searchParams.get("code");
      const tokenResponse = await fetch(`http://localhost:8080?code=${code}`, {
        method: "GET",
        credentials: "include",
      });
      const tokenData = await tokenResponse.json();
      if (!tokenResponse.ok) throw new Error("No token found");
      console.log({
        access_token: tokenData.access_token,
      });

      if (tokenData.access_token) localStorage.setItem("access_token", tokenData.access_token);
      if (tokenData.refresh_token) localStorage.setItem("refresh_token", tokenData.refresh_token);
    };

    generateToken();
  }, [location]);

  const handleLogin = async () => {
    const response = await fetch("http://localhost:8080/api/auth", {
      method: "GET",
      credentials: "include",
    });
    const data = await response.json();
    if (!response.ok) throw new Error("Something went wrong");
    window.location.href = data.url;
  };

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

  const handleSingleContact = async () => {
    const response = await fetch("http://localhost:8080/api/contacts/5192516000001080026", {
      method: "GET",
      headers: {
        authorization: `${window.localStorage.getItem("access_token")}`,
      },
    });

    const data = await response.json();

    if (!response.ok) throw new Error(JSON.stringify(data));

    console.log(data);

    setSingleContact(data.data[0]);
  };

  return (
    <>
      This is my sampel Dashboard
      <div>
        <button onClick={handleLogin}>Login</button>

        <button onClick={handleGetDeals}>Get Deals</button>

        <button onClick={handleSingleContact}>Get Single Contact</button>

        <div>
          <input value={singleContact ? singleContact.Email : "Waley pa value"} />
        </div>
      </div>
    </>
  );
};
