async function RestoreDate (num) {
    
    let response = await fetch("/getformDate", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
          },
        body: JSON.stringify({id: num})
        })
        let result = await response.json();
        return result}

        


export default RestoreDate;