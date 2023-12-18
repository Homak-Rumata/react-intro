import React, { useEffect, useState } from 'react';
import TabbleLabel from './TabbleLabel';

function PromiseTable ({count, setID, Ref, token}) {

  

    const [state, setState] = useState(10);
    const [st, setSt] = useState (0);

    const requestion = async () => {
        const date = await fetch("/getstatmens", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
              },
            body: JSON.stringify({userlogin: token})})
    
            let body = await date.json()
            return body;
    }



    useEffect(() => {
        requestion()
        .then(res => {setState(res); setSt(1)}
                /*if (count) {
                let a = res.slice(10*count, 10*(count+1)+1);
                setState("3")
                alert (state)}
                else {
                let a = res.slice(10*count);
                setState("3")
                alert (state);}*/
            
        )
        .catch(err => console.log(err));
      }, [count])

      function Tittle ({parametr, setID, Ref} ) {
        if (st) {
        return (
        <tbody>
          {parametr?parametr.map(par => <TabbleLabel params={par} setID={setID} Ref={Ref}/>):""
          }
        </tbody>)
        }
      }


      return (
        
            <Tittle parametr={state} setID={setID} Ref={Ref}/>
        
      )
    
}

export default PromiseTable