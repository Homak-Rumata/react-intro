function ControlPanel({GoBackForm}) {
return (
    <div id="page_control_panel">
        <div class="margins">
            <button id="StartPageButton" class="SelectorButton">Главная</button>
            <button id="MessageButton" class="SelectorButton" >Уведомления</button>
            <button id="WorkPlaceButton" class="SelectorButton" onClick={(e) => {GoBackForm("Не нажата")}} >Заявление</button>
        </div>
    </div>
    )}

export default ControlPanel