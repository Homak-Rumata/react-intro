import ConfirmButton from '../FormParts/ConfirmButton';
import React, { useEffect, useRef, useState } from 'react';

function Commentary ({token, rule, id, setCurrentId}) {
    const [buttonState, setButtonState] = useState(false);
    const [state, setState] = useState("Not Confirm");

    

    let a = useRef({text: ""});

    useEffect(()=>{
        if (state!="Not Confirm") {
            if (state) {
                a.current.id = id;
                a.current.token= token;
                a.current.status = 1;
            }
            else
            {
                a.current.id = id;
                a.current.token= token;
                a.current.status = 0
            }
            fetch("/setRecenze", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                  },
                body: JSON.stringify(a.current)})
                setCurrentId("Не нажата");

        }}, [buttonState])

        function Returnbutton ({buttonState, value, SetValue, letValue}) {
            if (rule) {
                return (
                    <ConfirmButton disabled={rule?"":"disabled"} buttonState={buttonState} value={value} SetValue={SetValue} letValue={letValue}/>
                )}
                else {
                    return
                }
            
        }

    return (<div id = "commentary" class = "WorkDateBlocks" >
      <h2 style={{"font-weight": "normal"}}>
        Комментарии
      </h2>
      <textarea disabled={(rule)?"":"disabled"} resize={"none"} style={{maxHeight: "300px", 
      minHeight: "300px", maxWidth: "500px", minWidth: "500px", "font-size": "100"}} 
      onChange={(e)=> {a.current.text=e.target.value }}/>
        <Returnbutton buttonState={setButtonState} value={"Принять"} SetValue={setState} letValue={true} />
        <Returnbutton buttonState={setButtonState} value={"Вернуть"} SetValue={setState} letValue={false} />
    </div>)
} 

export default Commentary;