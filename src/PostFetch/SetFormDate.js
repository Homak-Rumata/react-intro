function SetFormDate (date) {
    
    fetch("/InfoForm", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(date)
    })

    //alert (JSON.stringify(JSONDate));
    
}

export default SetFormDate;