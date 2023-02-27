import { useState } from "react";

const Forms = ({ samples }) => {
    const [lastName, setLastName] = useState();
    const [firstName, setFirstName] = useState();
    const [middleName, setMiddleName] = useState();

    return (
        <div className="forms">

            <h1>Form</h1>
            <form action="">
                <label htmlFor="lastName">First Name:</label>
                <input
                    type="text"
                    name="lastName"
                    required
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    id="" />

                <label htmlFor="firstName">First Name:</label>
                <input
                    type="text"
                    name="firstName"
                    required
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    id="" />

                <label htmlFor="middleName">First Name:</label>
                <input
                    type="text"
                    name="middleName"
                    required
                    value={middleName}
                    onChange={(e) => setMiddleName(e.target.value)}
                    id="" />

                <label htmlFor="middleName">First Name:</label>
                <input
                    type="text"
                    name="middleName"
                    required
                    value={middleName}
                    onChange={(e) => setMiddleName(e.target.value)}
                    id="" />
            </form>



        </div>
    );
}

export default Forms;