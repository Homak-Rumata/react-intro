import TextFields from '../FormParts/TextFields';
import PersonInfoFileds from '../InfoFields/personInfoFields';
import AgreeButton from '../FormParts/AgreeButton';

function Person({info, setInfo, buttonState, DesRef, rule}) {
  let date = PersonInfoFileds();
  function ChangeButton () {
    if (DesRef.current) {
      
    }
    else
    {
      return <AgreeButton buttonState={buttonState}/>
    }
  }

  return (
    <div id = "PersonInfo" class = "WorkDateBlocks" >
      <h2 style={{"font-weight": "normal"}}>
        Личные данные
      </h2>
        {date.map(proh => 
                <div>
                <TextFields props={proh} info={info} setInfo={setInfo} DesRef={DesRef}/>
                </div>
            )}
        
        <ChangeButton />
  </div>
  
  );
}

export default Person;