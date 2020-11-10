import React from 'react';

function MemberForm(){
    return(
    
        <form>
            <label>
                Name: 
                <input type='text' placeHolder='Your Name'/>
            </label>

            <br/>
            <br/>

            <label>
                Email:
                <input type='text' placeHolder='Your Email'/>
            </label>

            <br/>
            <br/>
            
            <label>
                Role:
                <select>
                    <option>Front-End</option>
                    <option>Back-End</option>
                    <option>Just Here To Vibe</option>
                </select>
            </label>
        </form>
    
    )
};

export default MemberForm;