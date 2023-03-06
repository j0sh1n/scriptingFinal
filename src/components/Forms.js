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
    const [locationA, setLocationA] = useState('Manila');
    const [disposition, setDisposition] = useState('');
    return (
        <div className="forms">

            <h1>Form</h1>
            <form action="">
                <label htmlFor="lastName">Last Name:</label>
                <input
                    type="text"
                    name="lastName"
                    required
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    id="lastName" />

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
                <label htmlFor="locationA">Location Applying for:</label>
                <select onChange={(e) => setLocationA(e.target.value)} name="locationA" id="locationA">
                    <option value="Manila">
                        Manila City
                    </option>
                    <option value="Cebu">
                        Cebu City
                    </option>
                    <option value="Roxas">
                        Roxas City
                    </option>
                </select>
                <label htmlFor="Disposition">Disposition</label>
                <select onChange={(e) => setDisposition(e.target.value)} name="" id="">
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
                <input type="submit" />
            </form>
        </div>
    );
}

export default Forms;