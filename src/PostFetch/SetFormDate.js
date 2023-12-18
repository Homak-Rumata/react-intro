function SetFormDate (date) {
    
    fetch("/InfoForm", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(date)
    })
    .then (res => res?res.text():null)
    .then (res => {if (res) {alert (res)} else {}})

    //alert (JSON.stringify(JSONDate));
    
}

export default SetFormDate;