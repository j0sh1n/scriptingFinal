import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const Content = () => {


    //increment page
    const [count, setCount] = useState(0)

    function adjustCount(amount) {

        setCount(currentCount => {
            return currentCount + amount
        })
    }
    // const { title,script,extra } = useContent(count);




    // useEffect(() => {
    //     script
    // }, [count])



    useEffect(() => {
        fetch(`https://www.zohoapis.com/bigin/v1/Deals`, {
            method: 'GET',
            mode: 'no-cors',
            headers: {
                'Authorization': 'Zoho-oauthtoken 1000.67b8ebacf175c0b3aecf891f57992383.a010f579dbc5e707509392aa98c99c55',
                    'Content-Type': 'application/json',      // 'Content-Type': 'application/x-www-form-urlencoded'
                    'Cookie': '3d223cf300=e7daf194bba5b5684705c7476baa48dd; JSESSIONID=3D6398D7182CCC1596E141861FED3EEE; _zcsr_tmp=0ad9f33f-d720-4f69-94ad-66dbe3743b6b; crmcsr=0ad9f33f-d720-4f69-94ad-66dbe3743b6b',
                    'Connection':'keep-alive',
                    'Accept':'*/*',
                    'Accept-Encoding':'gzip, deflate, br'
                },



        })
            .then(response => {
                console.log(response);
            })
            .then(data => {
                console.log(data);
            })
            .catch(err => {
                console.log(err);
            })


    }, [])



    return (
        <>
            <h1>Title</h1>


            {}



            <button onClick={() => adjustCount(-1)}>Back</button>

            <span>{count}</span>

            <button onClick={() => adjustCount(+1)}>Next</button>
        </>
    );
}

export default Content;