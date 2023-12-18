import React, { useEffect} from 'react';

function TextField({props, info, setInfo, DesRef}) {

    function Value () {
      if (info) {
        if (props.idvalue in info) {
        return info[props.idvalue]
      } else
      {
        return ""
      }
    } else 
    return "";
    }
    

  return (
    <div class="CompBlock">
          {props.textvalue}
          <input type={props.typevalue?props.typevalue:"text"} 
                 disabled = {DesRef?DesRef.current?"disabled":"":""}
                 id = {props.idvalue} 
                 className={props.classvvalue} 
                 name={props.namevalue}
                 defaultValue={Value()}
                 onChange={(e) => {
                  e.preventDefault();
                  setInfo.current[`${props.idvalue}`]=e.target.value;
                }} 
                 />
        </div>
  );
}

export default TextField;