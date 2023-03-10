import { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";

const FormerEmployee = () => {

    //page increment
    const [value, setValue] = useState('');

    const navigate = useHistory();



    return (
        <div className='content'>


            <h1>Former Employee</h1>

            <p>Have you trained or been employed with us before?</p><br />
            <div className='selection'>
                <button onClick={() => setValue('Yes')}>Yes</button>

                <button onClick={() => setValue('No')}>No</button>

            </div>
            {value==='Yes' && <div className='circ'><br /><label htmlFor="">Indicate the reason you left and separation date <br /><input type="text" /></label></div> }
            <div className='page'>
                <button onClick={() => navigate.goBack()}>Back</button>

                <button disabled={!value} onClick={() => navigate.push("/education")}>Next</button>
            </div>

        </div>

    );
}

export default FormerEmployee;