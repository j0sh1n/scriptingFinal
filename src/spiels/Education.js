import { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";


const Education = () => {

    const [value, setValue] = useState();
    const [extra, setExtra] = useState(false);
    const navigate = useHistory();

    // useEffect((e) => {
    //     console.log(e);
    // }, [e])

    return (
        <div className='content'>

            <h1>Education</h1>

            <p>What is the highest level of education have you completed?</p><br />

            {value === 'In College' && <div><p>Have you graduated? What degree/course/school?</p><input type="text" /></div>}
            {value === 'Graduated' && <div><p>Do you have pending board exam/result/licensure exam?</p><button onClick={() => setExtra(true)}>Yes</button> <button onClick={() => setExtra(false)}>No</button></div>}
            {extra && <div><p>When and What are your plans?</p> <input type="text" /></div>}
            {value === 'Undergraduate' && <div><p>What is your degree/course and your year level completed? Which school you attended?</p><input type="text" /></div>}

            <br />
            <button onClick={() => setValue('In College')}>In College</button>
            <button onClick={() => setValue('Graduated')}>Graduated</button>
            <button onClick={() => setValue('Undergraduate')}>Undergraduate</button>

            <br />
            <br />
            <div>
                <button onClick={() => navigate.goBack()}>Back</button>

                <button disabled={!value} onClick={() => navigate.push("/callCenterAgent")}>Next</button>
            </div>

        </div>



    );
}

export default Education;