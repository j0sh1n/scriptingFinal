import { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";

const FormerEmployee = () => {

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

    useEffect(() => {

        if (count === 0) {
            setScript("Have you trained or been employed with us before?");

        } else if (count === 1) {
            navigate.push("/education");

        } else if (count < 0) {
            ;
        }

    }, [count])



    return (
        <div className='content'>


            <h1>Former Employee</h1>

            <p>Have you trained or been employed with us before?</p>

            <button onClick={() => setValue('Yes')}>Yes</button>

            <button onClick={() => setValue('No')}>No</button>


            <div>
                <button onClick={() => navigate.goBack()}>Back</button>

                <button disabled={!value} onClick={() => navigate.push("/education")}>Next</button>
            </div>
           
        </div>

    );
}

export default FormerEmployee;