import React, { useState } from 'react';

export default function MemberForm(){

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
    };

    return(
        <div>  
            <form>
                <label>
                    Name: <input name='memberName' onChange={inputChange} type='text' placeholder='Your Name' id='nameInput'/>
                </label>

                <br/>
                <br/>

                <label>
                    Email: <input name='memberEmail' onChange={inputChange} type='text' placeholder='Your Email' id='emailInput'/>
                </label>

                <br/>
                <br/>

                <label>
                 Role: <select name='memberRole' onChange={inputChange} id='roleInput'>
                        <option>--Select A Role--</option>
                        <option>Front-End</option>
                        <option>Back-End</option>
                        <option>Just Here To Vibe</option>
                    </select>
                </label>
                <br/>
                <br/>
                <button onClick={submitClick}>Submit</button>
            </form>
        </div> 
    )
};

