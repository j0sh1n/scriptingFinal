import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useContent from "../useContent";


const Content = () => {


    //increment page
    const [count, setCount] = useState(0)

    function adjustCount(amount) {

        setCount(currentCount => {
            return currentCount + amount
        })
    }
    // const { title,script,extra } = useContent(count);




    // useEffect(() => {
    //     script
    // }, [count])



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
            <h1>Title</h1>


            {script}



            <button onClick={() => adjustCount(-1)}>Back</button>

            <span>{count}</span>

            <button onClick={() => adjustCount(+1)}>Next</button>
        </>
    );
}

export default Content;