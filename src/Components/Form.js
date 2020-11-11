import React, { useState } from 'react';

//prop is destructured but is the same as doing prop then accesing our passed property via prop.newMember is line 21
export default function MemberForm({newMember}){
    // we are tracking the state of multiple inputs with only one slice of state line 6-10
    const [inputData, setInputData] = useState({
        memberName: '',
        memberEmail: '',
        memberRole: ''
    });
    // When the value of our input changes we are setting our inputData state to that of the value present in our input box. Spread operator (...) copies our initial useState object and adds to it the value in our input.
    // the brackets allows us to identify each item in the obj by name. 
    const inputChange = (event) => {
        setInputData({
            ...inputData, 
            [event.target.name]: event.target.value,
        })
    }

    const submitClick = (event) =>{
        //prevents page from refreshing when button is clicked because that is a button's default action
        event.preventDefault();
        // here we are invoking our createNewMember function from our app.js which was passed into here via props. 
        // to the function we are passing the current state of inputData as our arguement. This function creates a new member obj.
        // the resulting data of newMember then becomes the stat of member as seen on line 25 of App.js
        newMember(inputData);
        // setInputData here resets our form back to blank after the submit button is clicked
        setInputData({
            memberName: '',
            memberEmail: '',
            memberRole: ''
        });
    };

    

    return(
        <div >  
            {/* Create a basic <form> with <input> inside to set up HTML form */}
            {/* onSubmit invokes the functions inside it when submission button is clicked */}
            <form onSubmit={submitClick}>
                {/* add <label> */}
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

