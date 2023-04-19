import React, { useEffect, useState } from "react";


const LandingPage = () => {
    const [data, setData] = useState(null);
    // const [isPending, setIsPending] = useState(true);
    // const [error, setError] = useState(null);
    useEffect(() =>
        fetch(`http://localhost:8080/api/auth`, {
            method: "GET",
            credentials: "include",
        })
            .then(res => {
                if (!res.ok) { // error coming back from server
                    throw Error('could not fetch the data for that resource');
                }

                // return res.json();

            }).then(data => {
                // setIsPending(false);
                setData(data);
                window.location.href = data.url;
                console.log(data)
                // setError(null);
            }).catch(err => {
                if (err.name === 'AbortError') {
                    console.log('fetch aborted')
                } else {
                    // auto catches network / connection error
                    // setIsPending(false);
                    // setError(err.message);
                }
            })

        , [])
    return (<>
    </>);
}

export default LandingPage;