import TextField from './TextField';

function TextFields(props) {
  


  function Header ({information}) {
    if (typeof(information) == "string")
    {
      props.props.shift();
      return (
        <div>
      <h3 style={{"font-weight": "normal"}}>
        {information}
        
        </h3>
          <hr />
          </div>
      )
    }
    return 
  }

  function Intro ({prop, info, setInfo, DesRef}) {
    if (prop.typevalue === "date") {
      let prop1 = {idvalue: "FirstTime",
              textvalue: "Начало",
              classvvalue: "InputInformationField",
              namevalue: "FirstTime" };

      let prop2 = {idvalue: "LastTime",
              textvalue: "Конец",
              classvvalue: "InputInformationField",
              namevalue: "LastTime" };
      return (
        <div class="CompBlock">
          Сроки прохождения
          <div style={{margin:"0px"}}>
          <TextField type={"date"} props={prop1} info={info} setInfo={setInfo} DesRef={DesRef}/>
          </div>
          <div style={{margin:"0px"}}>
          <TextField type={"date"} props={prop2} info={info} setInfo={setInfo} DesRef={DesRef}/>
          </div>
          
        </div>
      )
    } else if (typeof(prop)!="string") {
      
      return (
        <TextField type={"text"} props={prop} info={info} setInfo={setInfo} DesRef={DesRef}/>
      )
    }
    else {
      return
    }
  }


  return (
    <div class="compingBlock">
      <Header information={props.props[0]} />
        <div id="TextFields"> 
            {props.props.map(prop => 
                <Intro prop={prop} info={props.info} setInfo={props.setInfo} DesRef={props.DesRef}/>
                )}
        </div>
        </div>
  )
}





export default TextFields






















