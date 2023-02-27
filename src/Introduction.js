import { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";

const Introduction = () => {
    // const { id } = useParams();

    //page increment
    const [script, setScript] = useState();

    const [count, setCount] = useState(0);

    // setCount(id);

    const navigate = useHistory();

    function adjustCount(page) {

        setCount(currentCount => {
            return currentCount + page
        })
    }

    useEffect(() => {

        if (count === 0) {
            setScript('Hi Goodmorning/ afternoon! This is {recruiterName} from ePerformax BPO Contact Centers and BPO. Is this {firstName lastName}?');
        } else if (count === 1) {
            setScript('I would love to take 15 minutes of your time to see if ePerformax is a great fit for you');
        } else if (count === 2) {
            setScript('Great! This is how its going to work: First, Im going to ask a few questions to get to know you Second, we will discuss your previous work experience. As we go along, I will let you know what the what the next steps are. Does that sound ok?');
        } else if (count === 3) {
            navigate.push("/dataprivacy");
        }

    }, [count])


    return (


        <div className='content'>

            <h1>Introduction</h1>

            <p>{script}</p>


            <button disabled={count === 0} onClick={() => adjustCount(-1)}>Back</button>

            <span>{count}</span>

            <button onClick={() => adjustCount(+1)}>Next</button>

        </div>


    );
}

export default Introduction;