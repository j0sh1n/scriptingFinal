import { useState } from "react";
import { useHistory } from "react-router-dom";


const Qualification = () => {

    const navigate = useHistory();
    const [value, setValue] = useState();
    const [script, setScript] = useState();
    return (
        <div className="content">

            <h1>Qualification</h1>

            <p>Thank you for taking the time to talk with me today.</p><br />

            <button onClick={() => setScript()}>Qualified</button>
            <button onClick={() => setScript()}>Transfer</button>
            <button onClick={() => setScript()}>Unqualified</button>

            {script && <div></div>}
            <div className='page'>
                <button onClick={() => navigate.goBack()}>Back</button>

                <button disabled={!value} onClick={() => navigate.push("/qualification")}>Next</button>
            </div>
        </div>);
}

export default Qualification;