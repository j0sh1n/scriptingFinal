import React, { useContext, useEffect, useState } from "react";
import { Context } from "../App";

const Forms = () => {


    window.onbeforeunload = confirmExit;

    function confirmExit() {
        if (disposition === 0)
            return "No disposition";
    }


    // const applicant = useContext(Context);
    const { applicant, setApplicant } = useContext(Context);

    const [disposition, setDisposition] = useState("0");
    // const [citizenship, setCitizenship] = useState("");
    const [applicantObj, setApplicantObj] = useState({
        Last_Name: "",
        First_Name: "",
        Middle_Name: "",
        Email: "",
        Phone: "",
        Address_1: "",
        City: "",
        Date_of_Birth: "",
        Location: "",
        Citizenship: ""
    })
    const [pending, setPending] = useState(false);

    useEffect(() => {
        if (applicant) {

            for (const key in applicant) {
                if (applicantObj.hasOwnProperty(key)) {
                    setApplicantObj(prev => ({
                        ...prev,
                        [key]: applicant[key]
                    }))
                }
            }

        }

    }, [applicant])



    const handleSubmit = (e) => {


        e.preventDefault();
        const form = {
            applicantObj
        }
        setPending(true)
        console.log(form);


        // fetch(`https://www.zohoapis.com/bigin/v1/Deals`, {
        //     method: 'POST',
        //     mode: 'no-cors',
        //     headers: {
        //         'Authorization': 'Zoho-oauthtoken 1000.2684c61fb6f8fe9ceaea774d23bde5e9.f15f76dfd54896befcc3e5ac0f795d06',
        //         'Content-Type': 'application/json',      // 'Content-Type': 'application/x-www-form-urlencoded'
        //         'Cookie': '3d223cf300=e7daf194bba5b5684705c7476baa48dd; JSESSIONID=3D6398D7182CCC1596E141861FED3EEE; _zcsr_tmp=0ad9f33f-d720-4f69-94ad-66dbe3743b6b; crmcsr=0ad9f33f-d720-4f69-94ad-66dbe3743b6b',
        //         'Connection': 'keep-alive',
        //         'Accept': '*/*',
        //         'Accept-Encoding': 'gzip, deflate, br'
        //     },
        //     body: JSON.stringify(form)
        // }).then(() => {
        //     console.log(form);
        //     setPending(false);
        // })
    }

    const onChangeValue = (e) => {
        setApplicantObj({
            [e.target.name]: e.target.value
        })
    }

    return (
        <div className="forms flex-c center">

            <h1>Form</h1>

            {/* Applicant Code: {applicant.asdasd} */}
            {/* Referral Code: {applicant.Referral_ID} <br /><br /> */}

            <form onSubmit={handleSubmit} action="" className="flex-c">
                <label htmlFor="lastname">Last Name:</label>
                <input
                    type="text"
                    name="Last_Name"
                    required
                    value={applicantObj.Last_Name}
                    // onChange={(e) => setLastName(e.target.value)}
                    onChange={(e) => onChangeValue(e)}
                    id="lastname" />
                <label htmlFor="firstName">First Name:</label>
                <input
                    type="text"
                    name="First_Name"
                    required
                    value={applicantObj.First_Name}
                    onChange={(e) => onChangeValue(e)}
                    id="firstName" />
                <label htmlFor="middleName">Middle Name:</label>
                <input
                    type="text"
                    name="Middle_Name"
                    required
                    value={applicantObj.Middle_Name}
                    onChange={(e) => onChangeValue(e)}
                    id="middleName" />
                <label htmlFor="email">Personal Email:</label>
                <input
                    type="email"
                    name="email"
                    required
                    value={applicantObj.Email}
                    onChange={(e) => onChangeValue(e)}
                    id="email" />
                <label htmlFor="contactNumber">Contact Number:</label>
                <input
                    type="text"
                    name="Phone"
                    required
                    value={applicantObj.Phone}
                    onChange={(e) => onChangeValue(e)}
                    id="contactNumber" />
                <label htmlFor="address">Address:</label>
                <input
                    type="text"
                    name="Address_1"
                    required
                    value={applicantObj.Address_1}
                    onChange={(e) => onChangeValue(e)}
                    id="address" />
                <label htmlFor="city">City:</label>
                <input
                    type="text"
                    name="City"
                    required
                    value={applicantObj.City}
                    onChange={(e) => onChangeValue(e)}
                    id="city" />
                <label htmlFor="birthdate">Birthdate:</label>
                <input
                    type="date"
                    name="Date_of_Birth"
                    required
                    value={applicantObj.Date_of_Birth}
                    onChange={(e) => onChangeValue(e)}
                    id="birthdate" />
                <label htmlFor="site">Site Applying for:</label>
                <select
                    value={applicantObj.Location}
                    required
                    onChange={(e) => onChangeValue(e)}
                    name="Location"
                    id="site">
                    <option value="0" disabled >
                        Select site
                    </option>
                    <option value="Pasay">
                        Pasay City
                    </option>
                    <option value="Cebu">
                        Cebu City
                    </option>
                    <option value="Roxas">
                        Roxas City
                    </option>
                </select>
                <label htmlFor="Disposition">Disposition</label>
                <select
                    onChange={(e) => setDisposition(e.target.value)}
                    name=""
                    id=""
                    value={disposition}
                    required>
                    <option disabled value={0}>Select disposition</option>
                    <option value="Qualified - Scheduled CSA">Qualified - Scheduled CSA</option>
                    <option value="Qualified - Active File-E">Qualified - Active File-E</option>
                    <option value="Not Qualified">Not Qualified</option>
                    <option value="Call back for future interest">Call back for future interest</option>
                    <option value="Not Interested – Gave Spiel">Not Interested – Gave Spiel</option>
                    <option value="Not Interested – Hung Up">Not Interested – Hung Up</option>
                    <option value="Qualified – Non-agent">Qualified – Non-agent</option>
                    <option value="Scheduled Call back">Scheduled Call back</option>
                    <option value="Black Listed">Black Listed</option>
                    <option value="Can Not Be Reached">Can Not Be Reached</option>
                    <option value="Busy">Busy</option>
                    <option value="No Answer">No Answer</option>
                    <option value="Duplicate">Duplicate</option>
                    <option value="Call Back">Call Back</option>
                    <option value="Bad Number">Bad Number</option>
                    <option value="QCSA_Active File E">QCSA_Active File E</option>
                    <option value="QCSA_Active File Cannot go onsite">QCSA_Active File Cannot go onsite</option>
                    <option value="QCSA_ Active File No Internet">QCSA_ Active File No Internet</option>
                    <option value="Not Qualified – Paypal experience with CVG/CNX">Not Qualified – Paypal experience with CVG/CNX</option>
                </select>
                {/* <input type="submit" className="button1" /> */}
                {!pending && <div className="button1 flex-c center"><button>Submit</button></div>}
                {pending && <div className="button1 flex-c center"><button disabled >Sending request...</button></div>}
            </form >
        </div >
    );
}

export default Forms;