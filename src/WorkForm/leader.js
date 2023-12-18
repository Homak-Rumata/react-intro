import TextFields from '../FormParts/TextFields';
import LeaderInfoFileds from '../InfoFields/leaderInfoFields';
import AgreeButton from '../FormParts/AgreeButton';

function leader({info, setInfo, buttonState, DesRef, rule}) {
  let date = LeaderInfoFileds();
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
        Руководители
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

export default leader;































  
  