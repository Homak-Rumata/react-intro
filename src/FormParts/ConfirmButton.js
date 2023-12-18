function ConfirmButton ({buttonState, value, SetValue, letValue})

{
    return (
    <div>
          <input type="button" value={value} className = "AgreeFormButton" onClick={(e) => {buttonState(true); SetValue(letValue)}} />
    </div>)
}

export default ConfirmButton;