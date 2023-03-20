import { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";


const Education = () => {

    const [value, setValue] = useState();
    const [extra, setExtra] = useState(false);
    const navigate = useHistory();

    return (
        <div className='content flex-c center'>

            <h1>Education</h1>

            <p>What is the highest level of education have you completed?</p><br />
            <div className='button2'>
                <button onClick={() => { setValue('In College'); setExtra(); }}>In College</button>
                <button onClick={() => { setValue('Graduated'); setExtra(); }}>Graduated</button>
                <button onClick={() => { setValue('Undergraduate'); setExtra(); }}>Undergraduate</button>
            </div>

            <div className="subcontent input center flex-c">
                {value === 'In College' &&
                    <div className='flex-c center'>
                        <p>
                            Have you graduated? What degree/course/school?
                        </p><br /><input type="text" />
                    </div>}
                {value === 'Graduated' &&
                    <div className='flex-c center'>
                        <p>
                            Do you have pending board exam/result/licensure exam? <br />
                        </p><input type="text" />
                        <div className='button2'>
                            <button onClick={() => setExtra(true)}>Yes</button>
                            <button onClick={() => setExtra(false)}>No</button>
                        </div>
                    </div>}


                {extra && <div className='flex-c center' ><p> When and what are your plans?</p><input type="text" /></div>}
                {value === 'Undergraduate' &&
                    <div className='flex-c center'>
                        <p> What is your degree/course and your year level completed? Which school you attended?</p>
                        <input type="text" />
                    </div>}
            </div>


            <br />

            <div className='page flex-h'>
                <div className='button1'>
                    <button onClick={() => navigate.goBack()}>Back</button>
                </div>
                <div className={!value ? 'disabled' : 'button1'}>
                    <button disabled={!value} >Next</button>
                </div>
            </div>




        </div >



    );
}

export default Education;