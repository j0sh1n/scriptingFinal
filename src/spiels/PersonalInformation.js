import { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";


const PersonalInformation = () => {

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
            setScript("Let's start with the easy questions. Ask or verify for full name, email address, and Facebook account <br> Which city do you currently live in? <br> Are you currently of legal age to work? <br> Citizenship: Are you a Filipino? *if not, check for documents*");

        } else if (count === 1) {
            navigate.push("/formerEmployee");

        } else if (count < 0 ){
            navigate.goBack();
        }

    }, [count])



    return (


        <div className='content'>

            <h1>Personal Information</h1>

            <p>{script}</p>


            <button onClick={() => adjustCount(-1)}>Back</button>

            <span>{count}</span>

            <button onClick={() => adjustCount(+1)}>Next</button>

        </div>


    );
}

export default PersonalInformation;