function LeaderInfoFileds () {
        return [
        [
            "Руководитель практики",
            {
            idvalue: "WorkLeaderFirstNameTextField",
            classvvalue: "InputInformationField" ,
            namevalue: "WorkLeaderFirstNameTextField",
            textvalue: "Имя",
        },
        {
            idvalue:"WorkLeaderSecondNameTextField",
            classvvalue:"InputInformationField",
            namevalue:"WorkLeaderSecondNameTextField",
            textvalue:"Фамилия",
        },
        {
            idvalue:"WorkLeaderTreeNameTextField",
            classvvalue:"InputInformationField",
            namevalue:"WorkLeaderTreeNameTextField",
            textvalue:"Отчество (при наличии)",
        }],[
            "Заведующий кафеды",
        {
            idvalue:"CafedralLeaderFirstNameTextField",
            classvvalue:"InputInformationField",
            namevalue:"FirstNameTextField",
            textvalue:"Имя",
        },
        {
            idvalue:"CafedralLeaderSecondNameTextField",
            classvvalue:"InputInformationField",
            namevalue:"SecondNameTextField",
            textvalue:"Фамилия",
        },
        {
            idvalue:"CafedralLeaderTreeNameTextField",
            classvvalue:"InputInformationField",
            namevalue:"TreeNameTextField",
            textvalue: "Отчетство (при наличии)",
        },
        ]]

}

export default LeaderInfoFileds;