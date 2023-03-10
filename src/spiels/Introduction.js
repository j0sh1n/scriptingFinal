import { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";

const Introduction = () => {
    const navigate = useHistory();

    //page increment
    const [script, setScript] = useState();

    const [count, setCount] = useState(0);

    function adjustCount(page) {

        setCount(currentCount => {
            return currentCount + page
        })
    }

    useEffect(() => {

        if (count === 0) {
            setScript('Hi Goodmorning/ afternoon! This is {recruiterName} from ePerformax BPO Contact Centers and BPO. Is this {firstName lastName}? I would love to take 15 minutes of your time to see if ePerformax is a great fit for you');
        } else if (count === 1) {
            setScript('Great! This is how its going to work: First, Im going to ask a few questions to get to know you Second, we will discuss your previous work experience. As we go along, I will let you know what the what the next steps are. Does that sound ok?');
        } else if (count === 2) {
            navigate.push("/dataprivacy");
        }

    }, [count])


    // useEffect(() => {        
    //     fetch(`https://www.zohoapis.com/bigin/v1/Deals`, {
    //         method: 'GET',
    //         dataType: 'JSONP',
    //         mode: 'no-cors',
    //         headers: 
    //         {"Authorization": "Zoho-oauthtoken 1000.67b8ebacf175c0b3aecf891f57992383.a010f579dbc5e707509392aa98c99c55"},
    //         "Access-Control-Allow-Origin" : "*",
    //         "Content-type": "Application/json",
    //        })
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


        <div className='content'>

            <h1>Introduction</h1>

            <p>{script}</p>

            <div className='page'>
                <button disabled={count === 0} onClick={() => adjustCount(-1)}>Back</button>

                <button onClick={() => adjustCount(+1)}>Next</button>
            </div>
        </div>


    );
}

export default Introduction;