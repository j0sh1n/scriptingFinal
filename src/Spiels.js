import { Link } from 'react-router-dom';


const Spiels = () => {
    return (
        <div className="spiels">

            <h1>Spiels</h1>
            <ol>
                <li>
                    <Link to={`/introduction/${id}`}>
                        Introduction
                    </Link>
                </li>
                <li>
                    <Link to="/dataprivacy">
                        Data Privacy
                    </Link>
                </li>
                <li>
                    <Link to="/">
                        Personal Information
                    </Link>
                </li>
                <li>
                    <Link to="/">
                        Former Employee
                    </Link>
                </li>
                <li>
                    <Link to="/">
                        Education
                    </Link>
                </li>
                <li>
                    <Link to="/">
                        Call Center Agent
                    </Link>
                </li>
                <li>
                    <Link to="/">
                        Amenability
                    </Link>
                </li>
                <li>
                    <Link to="/">
                        Aspiration
                    </Link>
                </li>
                <li>
                    <Link to="/">
                        Qualification
                    </Link>
                </li>
            </ol>
        </div>

    );
}

export default Spiels;