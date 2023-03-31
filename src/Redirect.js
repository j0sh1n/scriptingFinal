import React, { useEffect, useState } from "react";
const Redirect = () => {
 
 
 
    useEffect(() => {
        fetch(`https://accounts.zoho.com/oauth/v2/auth?scope=ZohoBigin.users.ALL&client_id=${process.env.REACT_APP_CLIENT_ID}&response_type=code&access_type=offline&redirect_uri=${process.env.REACT_APP_REDIRECT_URI}`, {
            method: 'GET',
            mode: 'no-cors'



        })
            .then(response => {
                console.log(response);
            })
            .then(data => {
                console.log(data);
            })
            .catch(err => {
                console.log(err);
            })


    }, [])
    return (

        <>

        </>


    );
}

export default Redirect;