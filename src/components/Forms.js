import { useState } from "react";

const Forms = ({ samples }) => {
    const [lastName, setLastName] = useState();
    const [firstName, setFirstName] = useState();
    const [middleName, setMiddleName] = useState();
    const [email, setEmail] = useState();
    const [contactNumber, setContactNumber] = useState();

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
                    type="email"
                    name="conactNumber"
                    required
                    value={contactNumber}
                    onChange={(e) => setContactNumber(e.target.value)}
                    id="contactNumber" />
            </form>



        </div>
    );
}

export default Forms;