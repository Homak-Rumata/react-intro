import "./App";
import React, { useEffect, useState } from 'react';
import step1 from './Step1.svg';
import step2 from './Step2.svg';
import step3 from './Step3.svg';
import step4 from './Step4.svg';

function Steps({Ref}) {

/*const requestion = async () => {
    const response = await fetch('/getstepsimage');
    const body = await response.text();

    return body;
  };*/
 

  const [state, setState] = useState(null);


function GetPicture () {
        switch (Ref.current){
        case 0:
            return(<img src={step1} className="Step1Img" alt="step1" />);
        case 1:
            return(<img src={step2} className="Step2Img" alt="step2" />);
        case 2: 
            return(<img src={step3} className="Step3Img" alt="step3" />);
        case 3: 
            return(<img src={step4} className="Step4Img" alt="step4" />);
        default:
            return(<img src={step1} className="Step1Img" alt="step1" />);
    }}


useEffect(() => {
    setState(Ref.current)
  }, [Ref])


return (
    <div id="Steps">
        {GetPicture()}
    </div>
)}


export default Steps;