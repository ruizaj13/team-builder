import React from 'react';


export default function TeamList({member}){

    

    return(
        <div>
            <h2>Team Members:</h2>
           {member.map((person) => (
                <div>
                <h3>{person.memberName}</h3>
                <h3>{person.memberEmail}</h3>
                <h3>{person.memberRole}</h3>
            </div>))}
        </div>
    )
}