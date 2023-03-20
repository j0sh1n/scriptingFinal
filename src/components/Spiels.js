import { Link } from 'react-router-dom';


const Spiels = () => {
    return (
        <div className="spiels flex-c">

            <h1>Spiels</h1>
            <ol>
                <li>
                    <Link to="/">
                        Introduction
                    </Link>
                </li>
                <li>
                    <Link to="/dataPrivacy">
                        Data Privacy
                    </Link>
                </li>
                <li>
                    <Link to="/personalInformation">
                        Personal Information
                    </Link>
                </li>
                <li>
                    <Link to="/formerEmployee">
                        Former Employee
                    </Link>
                </li>
                <li>
                    <Link to="/education">
                        Education
                    </Link>
                </li>
                <li>
                    <Link to="/callCenterAgent">
                        Call Center Agent
                    </Link>
                </li>
                <li>
                    <Link to="/amenability">
                        Amenability
                    </Link>
                </li>
                <li>
                    <Link to="/aspiration">
                        Aspiration
                    </Link>
                </li>
                <li>
                    <Link to="/qualification">
                        Qualification
                    </Link>
                </li>
            </ol>
        </div>

    );
}

export default Spiels;