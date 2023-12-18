import StepBar from "./stepsbar";
import WorkFormFields from "../InfoFields/WorkFormFields";
import React, { useEffect, useRef, useState } from 'react';
import SetFormDate from "../PostFetch/SetFormDate";
import Steps from '../Steps.js';

function Workform ({GetDate, Ref, ID, name, DesRef, token, rule, setCurrentId}) {

    let Inform = {};
    if (GetDate) {
        for (let key in GetDate) {
            Inform[key] = GetDate[key]
        }}
    

    Inform.id=ID;
    Inform.token=token;

    const [buttonState, setButtonState] = useState (false);

    const [state, SetState] = useState (1);

    const [info, setInfo] = useState(Inform);

    

    const actualInfo = useRef(info);

    

    useEffect( () => {
        setInfo(actualInfo.current);
        if (DesRef.current)
        {} else{
        SetFormDate(actualInfo.current);
        }
        setButtonState(false);
    }, [state, buttonState])

    

    
    

    

    return (
        <div>
                  
                  <h1 style={{"font-weight": "normal", "font-style": "normal"}} >
                    Заявление  
                    {name}
                </h1>
                <Steps Ref={Ref}/>
            <StepBar Stateter={SetState} rule={DesRef} Ref={Ref}/>
            <WorkFormFields num={state} info={info} setInfo={actualInfo}
             buttonState={setButtonState} DesRef={DesRef} rule={rule} token={token} id={ID} setCurrentId={setCurrentId}/>
        </div>
    )
    
}

export default Workform