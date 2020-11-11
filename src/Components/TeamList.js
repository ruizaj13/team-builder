import React from 'react';


export default function TeamList({member}){

    // .map here iterates through our new obj accessed via member, and for every item it returns them 
    // as desired in our jsx below

    return(
        <div>
            <h2>Team Members:</h2>
           {member.map((item) => (
            <div>
                <h3>{item.memberName}</h3>
                <h3>{item.memberEmail}</h3>
                <h3>{item.memberRole}</h3>
            </div>))}
        </div>
    )
}