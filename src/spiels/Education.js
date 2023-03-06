import { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";


const Education = () => {

    const [value, setValue] = useState('');
    const [extra, setExtra] = useState(false);
    const navigate = useHistory();

    return (
        <div className='content'>

            <h1>Education</h1>

            <p>What is the highest level of education have you completed?</p><br />

            {value === 'In College' && <div><p><input type="text" /> Have you graduated? What degree/course/school?</p></div>}
            {value === 'Graduated' && <div><p><input type="text" /> Do you have pending board exam/result/licensure exam?</p><div><button onClick={() => setExtra(true)}>Yes</button> <button onClick={() => setExtra(false)}>No</button></div></div>}
            { extra && <div><p><input type="text" /> When and what are your plans?</p></div>}
            {value === 'Undergraduate' && <div><p><input type="text" /> What is your degree/course and your year level completed? Which school you attended?</p></div>}

            <br />
            <div className='education'>
                <button onClick={() => {setValue('In College'); setExtra(false); }}>In College</button>
                <button onClick={() => {setValue('Graduated'); setExtra(false);}}>Graduated</button>
                <button onClick={() => {setValue('Undergraduate'); setExtra(false);}}>Undergraduate</button>
            </div>
            <br />
            <br />
            <div className='page'>
                <button onClick={() => navigate.goBack()}>Back</button>

                <button disabled={!value} onClick={() => navigate.push("/callCenterAgent")}>Next</button>
            </div>

        </div>



    );
}

export default Education;