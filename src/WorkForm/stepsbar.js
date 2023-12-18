import StepsBarInfo from '../InfoFields/stepsBarInfo.js';
import React, { useEffect, useState } from 'react';

function StepsBar ({Stateter, rule, Ref}) {
    let [Click, setClick] =  useState(1);
    function Up (value) {
        let num = value.value.number;
        return (
            <div class={"StepControlField Up"+(num==Click?" active":"")}><input id={`RectangleStep${num}`} className={"StepControlBotton"} type="button" value={value.value.text} onClick={()=>{value.state(num); setClick(num)}}/></div>
        )
    }
    function Down (value) {
        let num = value.value.number;
        if (Ref.current) {
        return (
            <div class={"StepControlField Down"+(num==Click?" active":"")}><input id={`RectangleStep${num}`} className={"StepControlBotton"} type="button" value={Ref.current!=2?"Комментарий":value.value.text}  onClick={()=>{ value.state(num); setClick(num)}}/></div>
        )}
    }

    function Middle (value,) {
        let num = value.value.number;
        return (
            <div class={"StepControlField Middle" +(num==Click?" active":"")}><input id={`RectangleStep${num}`} className={"StepControlBotton"} type="button" value={value.value.text}  onClick={()=>{value.state(num); setClick(num)}}/></div>
        )
    }
    
    let inf = StepsBarInfo();

    function GetNewArray () {
        let array = [];
        while (inf.length > 1) {
            array.push(inf.shift())
        }
        return array;
    }

    

    return (
    

    
    <div id="StepPannel" style={{height: "10%"}}>
       <form> 
        <Up value={inf.shift()} state={Stateter} />
        {GetNewArray().map(elm => <Middle value={elm} state={Stateter} />)}
        <Down value={inf.shift()} state={Stateter}/>

    </form>
    </div>
    )
}

export default StepsBar;
