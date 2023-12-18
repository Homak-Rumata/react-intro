function GetHead ({params}) {
    function Cell ({date}) {
        return (
            <th>
                <h2 style={{"font-weight": "normal"}}>
                    {date}
                </h2>
            </th>
        )
    }

    return (
        <tr>
            {params.map( date => <Cell date={date} />)}
        </tr>
    )
}

export default GetHead;