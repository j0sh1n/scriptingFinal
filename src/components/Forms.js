import { useState } from "react";


const Forms = () => {
    const [lastName, setLastName] = useState('Pascual');
    const [firstName, setFirstName] = useState('Joshua');
    const [middleName, setMiddleName] = useState('Nielo');
    const [email, setEmail] = useState('jpascual@eperformax.com');
    const [contactNumber, setContactNumber] = useState('0999999999');
    const [address, setAddress] = useState('1131 Metropolitan Avenue');
    const [city, setCity] = useState('Makati City');
    const [birthdate, setBirthdate] = useState('2023-05-06');
    const [site, setSite] = useState('Pasay');
    const [disposition, setDisposition] = useState('0');

    const [pending, setPending] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = {
            lastName,
            firstName,
            middleName,
            email,
            contactNumber,
            address,
            city,
            site,
            disposition
        }
        setPending(true)
        console.log(form);


        fetch(`https://www.zohoapis.com/bigin/v1/Deals`, {
            method: 'POST',
            mode: 'no-cors',
            headers: {
                'Authorization': 'Zoho-oauthtoken 1000.2684c61fb6f8fe9ceaea774d23bde5e9.f15f76dfd54896befcc3e5ac0f795d06',
                'Content-Type': 'application/json',      // 'Content-Type': 'application/x-www-form-urlencoded'
                'Cookie': '3d223cf300=e7daf194bba5b5684705c7476baa48dd; JSESSIONID=3D6398D7182CCC1596E141861FED3EEE; _zcsr_tmp=0ad9f33f-d720-4f69-94ad-66dbe3743b6b; crmcsr=0ad9f33f-d720-4f69-94ad-66dbe3743b6b',
                'Connection': 'keep-alive',
                'Accept': '*/*',
                'Accept-Encoding': 'gzip, deflate, br'
            },
            body: JSON.stringify(form)
        }).then(() => {
            console.log(form);
            setPending(false);
        })
    }

    return (
        <div className="forms flex-c">

            <h1>Form</h1>
            <form onSubmit={handleSubmit} action="" className="flex-c">
                <label htmlFor="asdasdName">Last Name:</label>
                <input
                    type="text"
                    name="asdasdasd"
                    required
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    id="asdasdasd" />
                <label htmlFor="firstName">First Name:</label>
                <input
                    type="text"
                    name="firstName"
                    required
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    id="firstName" />
                <label htmlFor="middleName">Middle Name:</label>
                <input
                    type="text"
                    name="middleName"
                    required
                    value={middleName}
                    onChange={(e) => setMiddleName(e.target.value)}
                    id="middleName" />
                <label htmlFor="email">Personal Email:</label>
                <input
                    type="email"
                    name="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    id="email" />
                <label htmlFor="contactNumber">Contact Number:</label>
                <input
                    type="text"
                    name="conactNumber"
                    required
                    value={contactNumber}
                    onChange={(e) => setContactNumber(e.target.value)}
                    id="contactNumber" />
                <label htmlFor="address">Address:</label>
                <input
                    type="text"
                    name="address"
                    required
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    id="address" />
                <label htmlFor="city">City:</label>
                <input
                    type="text"
                    name="city"
                    required
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    id="city" />
                <label htmlFor="birthdate">Birthdate:</label>
                <input
                    type="date"
                    name="bithdate"
                    required
                    value={birthdate}
                    onChange={(e) => setBirthdate(e.target.value)}
                    id="birthdate" />
                <label htmlFor="site">Site Applying for:</label>
                <select
                    value={site}
                    required
                    onChange={(e) => setSite(e.target.value)}
                    name="site"
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
                {!pending && <div><button className="button1">Submit</button></div>}
                {pending && <div><button disabled className="button1">Sending request...</button></div>}
            </form >
        </div >
    );
}

export default Forms;