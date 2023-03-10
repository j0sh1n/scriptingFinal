import {  useState } from 'react';
import { useHistory } from "react-router-dom";


const Amenability = () => {

    const navigate = useHistory();

    const [amenability1, setAmenability1] = useState(false);
    const [amenability2, setAmenability2] = useState(false);
    const [amenability3, setAmenability3] = useState(false);
    const [amenability4, setAmenability4] = useState(false);
    const [amenability5, setAmenability5] = useState(false);

    const handleChange1 = (e) => {
        setAmenability1(e.target.checked);
    };
    const handleChange2 = (e) => {
        setAmenability2(e.target.checked);
    };
    const handleChange3 = (e) => {
        setAmenability3(e.target.checked);
    };
    const handleChange4 = (e) => {
        setAmenability4(e.target.checked);
    };
    const handleChange5 = (e) => {
        setAmenability5(e.target.checked);
    };


    return (
        <div className='content'>

            <h1>Amenability</h1>

            <label>
                <input type="checkbox"
                    value={amenability1}
                    onChange={handleChange1}
                />
                Night and/or shifting schedules?
            </label><br />

            <label>
                <input type="checkbox"
                    value={amenability2}
                    onChange={handleChange2}
                />
                Any medical condition/s that can affect your ability to work at night or on shifting schedules?
            </label>
            {amenability2 && <label> Indicate the health condition: <input type="text" /></label>}<br />
            <label>
                <input type="checkbox"
                    checked={amenability3}
                    onChange={handleChange3}
                />
                Work on Holidays/Weekends/Overtime?
            </label><br />
            <label>
                <input type="checkbox"
                    checked={amenability4}
                    onChange={handleChange4}
                />
                Amenable to work onsite Pasay/Roxas/Cebu?
            </label>{!amenability4 && <label> <br /> Reason: <input type="text" /></label>}<br />

            <label>
                <input type="checkbox"
                    checked={amenability5}
                    onChange={handleChange5}
                />
                Can start immediately/ ASAP?
            </label>{!amenability5 && <label> <br /> Why and when can they start? <input type="text" /></label>}<br />

            <div className='page'>
                <button onClick={() => navigate.goBack()}>Back</button>

                <button onClick={() => navigate.push("/aspiration")}>Next</button>
            </div>



        </div>

    );
}

export default Amenability;