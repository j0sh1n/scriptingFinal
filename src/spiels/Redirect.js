
import React, {
    useEffect,
    useContext,
    useState
} from "react";
import { useHistory,useLocation } from "react-router-dom";
import { Context } from "../App";


const Redirect = () => {
    const navigate = useHistory();

    const { applicant, setApplicant } = useContext(Context);

    const [singleContact, setSingleContact] = useState(null);

    const handleSingleContact = async () => {
        const response = await fetch(`http://localhost:8080/api/contacts/${localStorage.id}`, {
            method: "GET",
            headers: {
                authorization: `${window.localStorage.getItem("access_token")}`,
            },
        });

        const data = await response.json();

        if (!response.ok) throw new Error(JSON.stringify(data));
        setApplicant(data.data[0]);
        console.log(data);

        setSingleContact(data.data[0]);
    };

    const location = useLocation();


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

        };
        generateToken();
        handleSingleContact();
    }, []);


    // if (applicant )navigate.push("/introduction");


    return (<>
    </>);
}

export default Redirect;