import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export const Dashboard = () => {
  const location = useLocation();
  // const [auth, setAuth] = useState();
  // const [code, setCode] = useState();
  // const [reject, setReject] = useState();
  const [singleContact, setSingleContact] = useState(null);
//  localStorage.removeItem("token")
  useEffect(() => {
    const generateToken = async () => {
      //code
      const searchParams = new URLSearchParams(location.search);
      const code = searchParams.get("code");

      //get access token
      const tokenResponse = await fetch(`http://localhost:8080?code=${code}`, {
        method: "GET",
        credentials: "include",
      })
      const tokenData = await tokenResponse.json();
      if (!tokenResponse.ok) throw new Error("No token found", { cause: tokenData });
      console.log({
        access_token: tokenData.access_token,
      });
      //session http only 
      if (tokenData.access_token) localStorage.setItem("access_token", tokenData.access_token);
      if (tokenData.refresh_token) localStorage.setItem("refresh_token", tokenData.refresh_token);
      localStorage.setItem("token", 2)
    };
    generateToken();
  }, [location]);

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

  


  const handleLogin = async () => {
    const response = await fetch("http://localhost:8080/api/auth", {
      method: "GET",
      credentials: "include",
    });
    const data = await response.json();
    if (!response.ok) throw new Error("Something went wrong");
    localStorage.setItem("token", 1)
    window.location.href = data.url;
  };
  {
    !localStorage.token &&
    handleLogin()
  }
  {

  }
  
  const handleGetDeals = async () => {
    const response = await fetch("http://localhost:8080/api/deals", {
      method: "GET",
      headers: {
        authorization: `${window.localStorage.getItem("access_token")}`,
      },
    });

    const data = await response.json();

    if (!response.ok) throw new Error(JSON.stringify(data));
    localStorage.setItem("token", 3)

    console.log(data);
  };

   {localStorage.token === 2  && handleGetDeals()}

  const handleSingleContact = async () => {
    const response = await fetch(`http://localhost:8080/api/contacts/${localStorage.contact}`, {
      method: "GET",
      headers: {
        authorization: `${window.localStorage.getItem("access_token")}`,
      },
    });

    const data = await response.json();

    if (!response.ok) throw new Error(JSON.stringify(data));

    console.log(data);
    localStorage.setItem("token", 4)

    setSingleContact(data.data[0]);
  };

  localStorage.setItem("contact", '5192516000001022006')

  { localStorage.token === 4 && handleSingleContact()}

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
