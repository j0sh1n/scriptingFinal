import { useEffect, useState } from "react";
import Forms from './Forms';

const Spiel = () => {

    const [samples, setSamples] = useState([


        {
            "title": "My First Blog",
            "author": "mario",
            "id": 1
        },
        {
            "title": "Opening Party!",
            "author": "yoshi",
            "id": 2
        }

    ]);



    const [name, setName] = useState('mario');

    const handleClick = () => {
        setName('luigi');
    }

    useEffect(() => {
        console.log('use effect');
    }, [name]);

    return (
        <div className="home">

            <h2>Home Page</h2>


            <p>{name}</p>
            <button onClick={handleClick}>Click</button>
            <Forms samples={samples} />
            <Forms samples={samples.filter((sample) => sample.id === 2)} />



        </div>


    );
}

export default Spiel

