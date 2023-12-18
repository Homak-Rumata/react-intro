import React, { useEffect, useRef, useState } from 'react';
import Workform from './workform.js';
import StatmenTable from '../TabblePart/StatmenTable.js'
import RestoreDate from '../PostFetch/RestoreDate.js';


function CurrentForm ({currentId, setCurrentId, name, DesRef, token}) {

    
    const [date, setDate] = useState(null);

    const StepBar = useRef(0);


    const requestion = async () => {

        const response = await fetch("/getformDate", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
              },
            body: JSON.stringify({id: currentId})
            });
        const body = await response.json();
        return body;
      };
     
      useEffect (() => {
        if (currentId!="Не нажата") {

            requestion()
        .then(res => setDate(res))}
      }, [currentId])




function RetutnBlock () {
    if ((currentId!="Не нажата")) {
        return (<Workform GetDate={date} Ref={StepBar} ID={currentId} name={name}
             DesRef={DesRef.current>StepBar.current?DesRef:StepBar} rule={DesRef.current} token={token} setCurrentId={setCurrentId}/>)
    }
    else{
    return (
            <StatmenTable setID={setCurrentId} Ref={StepBar} token={token}/>
    )}
}

    return (
        <RetutnBlock />
    )
}

export default CurrentForm