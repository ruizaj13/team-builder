import React, {useState} from 'react';
import './App.css';
import MemberForm from './Components/Form';
import TeamList from './Components/TeamList'

function App() {

  const [ member, setMember] = useState([
        { id: 1,
          memberName: '',
        memberEmail: '',
        memberRole: ''}
  ]);
  
  const createNewMember = (newPerson) => {
      const newTeamMember = {
        id: Date.now(),
        memberName: newPerson.memberName,
        memberEmail: newPerson.memberEmail,
        memberRole: newPerson.memberRole,
      }

      setMember([...member, newTeamMember]);
  }

  return (
    <div className='App'>
      <MemberForm newMember={createNewMember}/>
      <TeamList member={member}/>
    </div>
  );
}

export default App;
