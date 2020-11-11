import React, { useState } from 'react';

export default function MemberForm({newMember}){

    const [inputData, setInputData] = useState({
        memberName: '',
        memberEmail: '',
        memberRole: ''
    });

    const inputChange = (event) => {
        setInputData({
            ...inputData, 
            [event.target.name]: event.target.value,
        })
    }

    const submitClick = (event) =>{
        event.preventDefault();
        newMember(inputData);
        setInputData({
            memberName: '',
            memberEmail: '',
            memberRole: ''
        });
    };

    return(
        <div >  
            <form onSubmit={submitClick}>
                <label>
                    Name: <input value={inputData.memberName} name='memberName' onChange={inputChange} type='text' placeholder='Your Name' id='nameInput'/>
                </label>

                <br/>
                <br/>

                <label>
                    Email: <input value={inputData.memberEmail} name='memberEmail' onChange={inputChange} type='text' placeholder='Your Email' id='emailInput'/>
                </label>

                <br/>
                <br/>

                <label>
                 Role: <select value={inputData.memberRole} name='memberRole' onChange={inputChange} id='roleInput'>
                        <option>--Select A Role--</option>
                        <option>Front-End</option>
                        <option>Back-End</option>
                        <option>Just Here To Vibe</option>
                    </select>
                </label>
                <br/>
                <br/>
                <button>Submit</button>
            </form>
        </div> 
    )
};

