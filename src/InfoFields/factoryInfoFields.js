function FactoryInfoFileds () {
    return [
    [
        "Реквизиты Предприятия",
        {
        idvalue: "FactoryNameTextField",
        classvvalue: "InputInformationField" ,
        namevalue: "FactoryNameTextField",
        textvalue: "Наименование",
    }],[
        "Адресс",
    {
        idvalue:"RegionNameTextField",
        classvvalue:"InputInformationField",
        namevalue:"RegionNameTextField",
        textvalue:"Область",
    },
    {
        idvalue:"DistrictNameTextField",
        classvvalue:"InputInformationField",
        namevalue:"DistrictNameTextField",
        textvalue:"Район",
    },
    {
        idvalue:"LocalityNameTextField",
        classvvalue:"InputInformationField",
        namevalue:"LocalityNameTextField",
        textvalue:"Населённый пункт",
    }],
    [
        {
        idvalue: "StreetTextField",
        classvvalue: "InputInformationField" ,
        namevalue: "StreetTextField",
        textvalue: "Улица",
    },
    {
        idvalue:"buildingNumberTextField",
        classvvalue:"InputInformationField",
        namevalue:"buildingNumberTextField",
        textvalue:"Дом",
    },
    {
        idvalue:"MailPostNumberTextField",
        classvvalue:"InputInformationField",
        namevalue:"MailPostNumberTextField",
        textvalue:"Почтовый индекс",
    }    
    ]]

}

export default FactoryInfoFileds;