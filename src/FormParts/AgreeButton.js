function AgreeButton ({buttonState})

{
    return (
    <div>
          <input type="button" value="Отправить" className = "AgreeFormButton" onClick={(e) => buttonState(true)} />
    </div>)
}

export default AgreeButton;