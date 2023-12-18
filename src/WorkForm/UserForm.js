import ControlPanel from '../ControlPanel.js';
import React, { useEffect, useRef, useState } from 'react';
import CurrentForm from '../WorkForm/CurrentForm.js';
import Logo from '../logo.js';

function UserForm ({token, rule}) {

    const [currentId, setCurrentId] = useState("Не нажата");

  return (
    <div className="App">
      <Logo />

      <ControlPanel GoBackForm={setCurrentId}/>
      <div className='margins'>
      <div>

      <CurrentForm currentId={currentId} setCurrentId={setCurrentId} 
      name={"Иванов Иван Иванович"} DesRef={{current: rule}} token={token}/>

      </div>
      </div>

      
    </div>
  );
}

export default UserForm