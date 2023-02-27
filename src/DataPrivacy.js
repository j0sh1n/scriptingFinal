import { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";


const DataPrivacy = () => {

    //page increment
    const [script, setScript] = useState();

    const [count, setCount] = useState(0);

    const navigate = useHistory();

    function adjustCount(page) {

        setCount(currentCount => {
            return currentCount + page
        })
    }

    useEffect(() => {

        if (count === 0) {
            setScript('I would like to ask for your permission to get your personal data, work experiences, and other information that are relevant to your application. this call is recorded for quality and training is that okay?');

        } else if (count === 1) {
            navigate.push("/personalInformation");

        } else if (count < 0 ){
            navigate.goBack();
        }

    }, [count])



    return (


        <div className='content'>

            <h1>Data Privacy</h1>

            <p>{script}</p>


            <button onClick={() => adjustCount(-1)}>Back</button>

            <span>{count}</span>

            <button onClick={() => adjustCount(+1)}>Next</button>

        </div>


    );
}

export default DataPrivacy;