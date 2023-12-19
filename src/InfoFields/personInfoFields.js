function PersonInfoFileds () {
    return [
        [
        "Основные данные",
        {
        idvalue: "FirstNameTextField",
        classvvalue: "InputInformationField" ,
        namevalue: "FirstNameTextField",
        textvalue: "Имя",
    },
    {
        idvalue:"SecondNameTextField",
        classvvalue:"InputInformationField",
        namevalue:"SecondNameTextField",
        textvalue:"Фамилия",
    },
    {
        idvalue:"TreeNameTextField",
        classvvalue:"InputInformationField",
        namevalue:"TreeNameTextField",
        textvalue:"Отчество (при наличии)",
    }],[
        //GroupName=undefined,
    {
        idvalue:"Grp",
        classvvalue:"InputInformationField",
        namevalue:"FirstNameTextField",
        textvalue:"Группа",
    },
    {
        idvalue:"Direction",
        classvvalue:"InputInformationField",
        namevalue:"Direction",
        textvalue:"Направление подготовки",
    }],
    [
        "Практика",
        {
        idvalue: "PracticeSort",
        classvvalue: "InputInformationField" ,
        namevalue: "FirstNameTextField",
        textvalue: "Вид практики",
    },
    {
        idvalue:"PracticeType",
        classvvalue:"InputInformationField",
        namevalue:"SecondNameTextField",
        textvalue:"Тип практики",
    },
    {
        typevalue: "date",
        classvvalue:"InputInformationField",
    }
    ]]

}

export default PersonInfoFileds;