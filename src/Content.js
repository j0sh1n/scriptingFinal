import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";



const Content = () => {
    const code = window.location.href;


    //increment page
    const [count, setCount] = useState(0)

    function adjustCount(amount) {

        setCount(currentCount => {
            return currentCount + amount
        })
    }




useEffect(()=> {


},[count])



    // useEffect(() => {
    //     fetch(`https://accounts.zoho.com/oauth/v2/auth?scope=ZohoBigin.modules.ALL&client_id=${process.env.REACT_APP_CLIENT_ID}&response_type=code&access_type=offline&redirect_uri=${process.env.REACT_APP_REDIRECT_URI}`, {
    //         method: 'GET',
    //         mode: 'no-cors'



    //     })
    //         .then(response => {
    //             console.log(response);
    //         })
    //         .then(data => {
    //             console.log(data);
    //         })
    //         .catch(err => {
    //             console.log(err);
    //         })


    // }, [])



    return (
        <>

            <h1>{code}</h1>

            <button onClick={() => adjustCount(-1)}>Back</button>

            <span>{count}</span>

            <button onClick={() => adjustCount(+1)}>Next</button>

        </>
    );
}

export default Content;