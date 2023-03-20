import { useState } from 'react';
import { useHistory } from "react-router-dom";


const PersonalInformation = () => {

    //citizenship
    const [filipino, setFilipino] = useState(true);

    //const [age, setAge] = useState(false);

    const navigate = useHistory();

    return (


        <div className='content flex-c center'>

            <h1>Personal Information</h1>
            <div className="maincontent">
                <p> Let's start with the easy questions. <br /><br /><br />
                    Ask or verify for full name, email address, and Facebook account <br /> <br />

                    Which city do you currently live in? <br /> <br />
                    Are you currently of legal age to work? <br /> <br />

                    Citizenship: Are you a Filipino? <br /><br />
                </p>
                <div className="flex-h button2 justify">
                    <button onClick={() => setFilipino(true)} >Yes</button>
                    <button onClick={() => setFilipino(false)}>No</button>
                </div>

            </div>

            {!filipino && <div><br /><p><input type="text" name="" id="" /><br /> What is your citizenship?</p> </div>}

            <div className='page flex-h button1'>

                <button onClick={() => navigate.goBack()}>Back</button>

                <button onClick={() => navigate.push("/formerEmployee")}>Next</button>

            </div>
        </div>


    );
}

export default PersonalInformation;