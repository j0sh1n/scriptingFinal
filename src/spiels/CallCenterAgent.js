import { useState } from 'react';
import { useHistory } from "react-router-dom";

const CallCenterAgent = () => {

    //page increment
    const [value, setValue] = useState();

    const [script, setScript] = useState();

    const [count, setCount] = useState(0);

    const navigate = useHistory();

    function adjustCount(page) {

        setCount(currentCount => {
            return currentCount + page
        })
    }

    return (
        <div className='content'>


            <h1>Call Center Agent</h1>

            <p>Thanks for sharing some of your details, let's talk about your work experience Have you worked in call center before?
            </p>
            <button onClick={() => setValue('Yes')}>Yes</button>

            <button onClick={() => setValue('No')}>No</button>


            <div>
                <button onClick={() => navigate.goBack()}>Back</button>

                <button disabled={!value} onClick={() => navigate.push("/amenability")}>Next</button>
            </div>

        </div>


    );
}

export default CallCenterAgent;