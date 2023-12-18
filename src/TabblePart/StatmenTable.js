
import StatmenTittle from "./StatmenTittle";
import TabbleLabel from "./TabbleLabel";
import GetHead from "./GetHead";
import PromiseTable from "./PromiseTable";
import GetId from "../PostFetch/GetID";


function StatmenTabble ({setID, Ref, token}) {

    return (
        <div>
            <table id="StateTabble">
                {<GetHead params={StatmenTittle()}/>}
                {<PromiseTable count={0} setID={setID} Ref={Ref} token={token}/>}

            </table>
            <hr />
            <input type="button" 
                    value="Создать заявление" 
                    id="CreateStatemen" 
                    className="CreateFormButton" 
                    onClick={(e) => {
                        GetId(setID, "User")
                        Ref.current = 0;
            }}></input>
        </div>
    )
}

export default StatmenTabble;