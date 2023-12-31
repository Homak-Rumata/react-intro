import Factory from "../WorkForm/factory";
import Leader from "../WorkForm/leader";
import Person from "../WorkForm/person";
import Commentary from "../WorkForm/Commentary";
import React, { useEffect, useRef, useState } from 'react';

function WorkFormFields ({num, info, setInfo, buttonState, DesRef, rule, token, id, setCurrentId}) {

    let a = useRef({text: ""});

    switch (num) {
        case 1:
            return <Person info={info} setInfo={setInfo} buttonState={buttonState} DesRef={DesRef} rule={rule}/>
        case 3:
            return <Leader info={info} setInfo={setInfo} buttonState={buttonState} DesRef={DesRef} rule={rule}/>
        case 4:
            return <Factory info={info} setInfo={setInfo} buttonState={buttonState} DesRef={DesRef} rule={rule}/>
        case 5:
               return <Commentary rule={rule} token={token} id={id} setCurrentId={setCurrentId} a={a}/>
            
        default:
            return (<div style={{display:"inline-block"}}> {"Данная вкладка в разработке"}</div>)
    }

}

export default WorkFormFields