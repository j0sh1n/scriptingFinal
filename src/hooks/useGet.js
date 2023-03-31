import React, { useState, useEffect } from 'react';

const useGet = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);



    useEffect(() => {
        const abortCont = new AbortController();
        const requestOptions = {
            method: 'GET', // *GET, POST, PUT, DELETE, etc.
            mode: 'no-cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'include', // include, *same-origin, omit
            abuthorization: 'Zoho-oauthtoken 1000.bb66dc461dd36a510cdfc047ce9e4eb1.f3f01d0988dcfd6a7be7dd0074cddbc3'
            // redirect: 'follow', // manual, *follow, error
            // referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            // headers: {
            //     'Authorization': 'Zoho-oauthtoken 1000.bb66dc461dd36a510cdfc047ce9e4eb1.f3f01d0988dcfd6a7be7dd0074cddbc3',
            //     'Content-Type': 'application/json',      // 'Content-Type': 'application/x-www-form-urlencoded'
            //     'Cookie': '3d223cf300=e7daf194bba5b5684705c7476baa48dd; JSESSIONID=3D6398D7182CCC1596E141861FED3EEE; _zcsr_tmp=0ad9f33f-d720-4f69-94ad-66dbe3743b6b; crmcsr=0ad9f33f-d720-4f69-94ad-66dbe3743b6b',
            //     'Connection':'keep-alive',
            //     'Accept':'*/*',
            //     'Accept-Encoding':'gzip, deflate, br'
            // }
            // body: JSON.stringify(data)
            //     'Content-Type': 'application/json',
            //     'Connection': 'keep-alive',
            //     'Cookie':'3d223cf300=e7daf194bba5b5684705c7476baa48dd; JSESSIONID=3D6398D7182CCC1596E141861FED3EEE; _zcsr_tmp=0ad9f33f-d720-4f69-94ad-66dbe3743b6b; crmcsr=0ad9f33f-d720-4f69-94ad-66dbe3743b6b'
            // },
        };

        fetch(url, requestOptions, { signal: abortCont.signal })
            .then(res => {
                if (!res.ok) { // error coming back from server
                    throw Error('could not fetch the data for that resource');
                }
                return res.json();
            })
            .then(data => {
                setIsPending(false);
                setData(data);
                setError(null);
                console.log('null everything')

            })
            .catch(err => {
                if (err.name === 'AbortError') {
                    console.log('fetch aborted')
                } else {
                    // auto catches network / connection error
                    setIsPending(false);
                    setError(err.message);
                }
            })
        // }, 1000);

        // abort the fetch
        return () => abortCont.abort();
    }, [url])

    return { data, isPending, error };
}

export default useGet;