import React, { useEffect, useRef, useState } from 'react';

function AutorizationBlock ({GetUserRule}) {


    
    let Login;
    let password
    
    const requestion = async () => {
        const date = await fetch("/autorization", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
              },
            body: JSON.stringify({login: Login, password:password})})
    
            let body = await date.json()
            return body;
    }

    return (
        <div>
            <h1 style={{"font-weight": "normal"}}>
                Панель входа в аккаунт
            </h1>
            <div>
            <h3 style={{"font-weight": "normal"}}>
                Логин
            <input type={"text"} style={{display: "block"}} onChange={(e) => {Login=e.target.value}}/>
            </h3>
            </div><div>
            <h3 style={{"font-weight": "normal"}}>
                Пароль
            <input type={"password"} style={{display: "block"}} onChange={(e) => password=e.target.value}/>
            </h3>
            </div>
            <input value={"Войти"} type='button' onClick={(e) => {requestion().then(res=> {GetUserRule(res)})}}/>
        </div>
    )
}
export default AutorizationBlock;