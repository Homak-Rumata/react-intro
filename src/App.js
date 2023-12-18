import AutorizationBlock from './autorizationForm/AutorizationBlock.js';
import logo from './logo.svg';
import './style.css';
import Person from './WorkForm/person.js';
import Factory  from './WorkForm/factory.js';
import StepsBar from './WorkForm/stepsbar.js';
import Leader from './WorkForm/leader.js'

import React, { useEffect, useRef, useState } from 'react';
import UserForm from './WorkForm/UserForm.js';



function App() {
  const [UserRule, SetUserRule] = useState(null)

  function ChangeBlock ({UserRule}) {
    if (UserRule) {
      return <UserForm token={UserRule.token} rule={UserRule.rule}/>
    } else
    {
      return <AutorizationBlock GetUserRule={SetUserRule}/>
    }
  }

  return (
    <ChangeBlock UserRule={UserRule} />
  )



}

export default App;
