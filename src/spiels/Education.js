import { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import { Dialog } from '@headlessui/react'


const Education = () => {

    //page increment
    const [value, setValue] = useState();

    const [script, setScript] = useState();

    const [count, setCount] = useState(0);

    const navigate = useHistory();

    let [isOpen, setIsOpen] = useState(true)

    function adjustCount(page) {

        setCount(currentCount => {
            return currentCount + page
        })
    }

    useEffect(() => {

        if (count === 0) {
            setScript('What is the highest level of education have you completed?');

        } else if (count === 1) {
            navigate.push("/callCenterAgent");

        } else if (count < 0) {
            navigate.goBack();
        }

    }, [count])



    return (
        <div className='content'>


            <h1>Education</h1>

            <p>{script}</p>

            <button onClick={() => setValue('In College')}>In College</button>
            <button onClick={() => setValue('Graduate')}>Graduate</button>
            <button onClick={() => setValue('Undergraduate')}>Undergraduate</button>


            <div>
                <button onClick={() => adjustCount(-1)}>Back</button>

                <button disabled={!value} onClick={() => adjustCount(+1)}>Next</button>
            </div>
            {/* <button onClick={()=>setIsOpen(true)}></button>
        <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
            <Dialog.Panel>
                <Dialog.Title>Deactivate account</Dialog.Title>
                <Dialog.Description>
                    This will permanently deactivate your account
                </Dialog.Description>

                <p>
                    Are you sure you want to deactivate your account? All of your data
                    will be permanently removed. This action cannot be undone.
                </p>

                <button onClick={() => setIsOpen(false)}>Deactivate</button>
                <button onClick={() => setIsOpen(false)}>Cancel</button>
            </Dialog.Panel>
        </Dialog> */}



        </div>



    );
}

export default Education;