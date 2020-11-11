import React, {useState} from 'react';
import './App.css';
import MemberForm from './Components/Form';
import TeamList from './Components/TeamList'

function App() {
  // state to be passed as a property
  //member later changes state to the resulting data of our createNewMember function which is invoked in the form.js as newMember()
  // use brackets to make obj array or else you wont be able to map over it in teamlist.js
  const [ member, setMember] = useState([
        { id: 1,
          memberName: '',
          memberEmail: '',
          memberRole: ''}
  ]);
  // function to be passed as a property, the function is not currently recieving data it has only been created for future use.
  const createNewMember = (newPerson) => {
      const newTeamMember = {
        // the id allows us to be able to identify our objs later incase we want to refer to a specific one for editing purposes. Date.now() creates unique id based off the date
        id: Date.now(),
        // I believe the dot notation here is appending the input value to the obj key
        memberName: newPerson.memberName,
        memberEmail: newPerson.memberEmail,
        memberRole: newPerson.memberRole,
      }
      // (...) <-spread operator takes a copy of our original member state and adds to it the newly created member obj we made with const newTeamMember
      setMember([...member, newTeamMember]);
  }

  return (
    <div className='App'>
      {/* property is created with 'newMember allowing us to pass to MemberForm and use it.
      Same with Teamlist and member where we are passing state */}
      <MemberForm newMember={createNewMember}/>
      <TeamList member={member}/>
    </div>
  );
}

export default App;
