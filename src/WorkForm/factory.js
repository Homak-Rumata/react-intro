import TextFields from '../FormParts/TextFields';
import FactoryInfoFileds from '../InfoFields/factoryInfoFields';
import AgreeButton from '../FormParts/AgreeButton';

function factory({info, setInfo, buttonState, DesRef, rule}) {
  let date = FactoryInfoFileds();
  function ChangeButton () {
    if (DesRef.current) {
      
    }
    else
    {
      return <AgreeButton buttonState={buttonState}/>
    }
  }
  return (
    <div id = "leader" class = "WorkDateBlocks" >
      <h2 style={{"font-weight": "normal"}}>
        Предприятие
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

export default factory;