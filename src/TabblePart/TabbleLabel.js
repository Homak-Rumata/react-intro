import StatusCode from "../InfoFields/statusCode";
import TypeCode from "../InfoFields/TypeCode";

function TabbleLabel ({params, setID, Ref}) {

    
    function Cell ({date}) {
        return (
            <th>
                {date}
            </th>
        )
    }


    return (
        <tr className="InfFields">
            {//params.map( inf => <Cell date={inf} />)
            }
            {/*<th>
                {params.id}
        </th>*/}
            <th className="InfFields">
                {params.tyme.replace(/-/ig, ".")}
            </th>
            <th className="InfFields">
                {StatusCode(params.type)}
            </th>
            <th className="InfFields">
                {TypeCode(params.status)}
            </th>
            <th>
                <input type="button" value={"Показать"} className="ButtonOpenForm" onClick={(e)=>{Ref.current=params.status;
                     setID(params.id)}}/>
            </th>
            
        </tr>
    )
}

export default TabbleLabel;