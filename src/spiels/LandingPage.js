import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";


const LandingPage = () => {
    const { id } = useParams();
    const navigate = useHistory();

    localStorage.setItem("id",id)
    navigate.push("/")


    return (<>
    </>);
}

export default LandingPage;