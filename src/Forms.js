const Forms = ({ samples }) => {

    return (
        <div className="forms">
            {samples.map((sample) => (

                <div className="content" key={sample.id}>
                    <h1>{sample.title}</h1>
                    <p>{sample.author}</p>

                </div>

            ))}
        </div>
    );
}

export default Forms;