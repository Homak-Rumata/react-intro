async function GetId (Setter, login) {

    let response = await fetch("/NewStatmen", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
          },
        body: JSON.stringify({login: login})
        })
        let result = await response.json();
        Setter(result.id);
        

    
}

export default GetId;