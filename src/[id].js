import { useParams } from "react-router-dom";

const Test = () => {

    const jomark = useParams();
    console.log(jomark)

    return (


        <>
            <h1>hatdog</h1>
        </>
    );
}

export default Test;