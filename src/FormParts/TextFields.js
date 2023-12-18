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
      return (
        <div class="CompBlock">
          Сроки прохождения
          <input type="date"id = "FirstTime" class="InputInformationField" name="FirstTime" />
          Начало
          <input type="date" id = "LastTime" class="InputInformationField" name="LastTime" />
          Конец
        </div>
      )
    } else if (typeof(prop)!="string") {
      
      return (
        <TextField props={prop} info={info} setInfo={setInfo} DesRef={DesRef}/>
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






















