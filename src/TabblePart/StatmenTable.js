
import StatmenTittle from "./StatmenTittle";
import TabbleLabel from "./TabbleLabel";
import GetHead from "./GetHead";
import PromiseTable from "./PromiseTable";
import GetId from "../PostFetch/GetID";


function StatmenTabble ({setID, Ref, token, rule}) {

    function ReturnButton () {
        if (!rule.current) {
            return (
                <input type="button" 
                    value="Создать заявление" 
                    id="CreateStatemen" 
                    className="CreateFormButton" 
                    onClick={(e) => {
                        GetId(setID, rule)
                        Ref.current = 0;
            }} />
            )
        } else {
            return 
        }
    }

    return (
        <div>
            <table id="StateTabble">
                {<GetHead params={StatmenTittle()}/>}
                {<PromiseTable count={0} setID={setID} Ref={Ref} token={token}/>}

            </table>
            <hr />
            <ReturnButton />
        </div>
    )
}

export default StatmenTabble;