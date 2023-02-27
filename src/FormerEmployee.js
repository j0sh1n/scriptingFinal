import { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import { Dialog } from '@headlessui/react'


const FormerEmployee = () => {

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
            setScript('I would like to ask for your permission to get your personal data, work experiences, and other information that are relevant to your application. this call is recorded for quality and training is that okay?');

        } else if (count === 1) {
            navigate.push("/personalInformation");

        } else if (count < 0) {
            navigate.goBack();
        }

    }, [count])



    return (
        <>

        <button onClick={()=>setIsOpen(true)}></button>
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
        </Dialog>
        </>
        


        // <div className='content'>



        //     <h1>Data Privacy</h1>

        //     <p>{script}</p>

        //     <button>Yes</button>

        //     <button onClick={() => setValue('No')}>No</button>


        //     <div>
        //         <button onClick={() => adjustCount(-1)}>Back</button>

        //         <button disabled={!value} onClick={() => adjustCount(+1)}>Next</button>
        //     </div>

        // </div>


    );
}

export default FormerEmployee;