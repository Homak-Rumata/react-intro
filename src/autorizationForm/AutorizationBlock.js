import React, { useEffect, useRef, useState } from 'react';

function AutorizationBlock ({GetUserRule}) {


    
    let Login;
    let password
    
    const requestion = async () => {
        let struct ={}
        struct.login = Login;
        struct.password = password;
        const date = await fetch("/autorization", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
              },
            body: JSON.stringify(struct)})
            if (date.status) {
            
            let body = await date.json()
            return body;}
            else {
                return {}

            }

    }

    /*const requestionDouble = async () => {
        let struct ={}
        struct.login = Login;
        struct.password = password;
        const date = await fetch("/GetPDF", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
              },
            body: JSON.stringify(struct)})
            if (date.status) {
            let body = await date.blob()
            alert (JSON.stringify(body))
            return body;}
            else {
                return {}

            }

    }*/

    return (
        <div style={{width: "100%",
        height: "100%",
        position: "absolute",
        top: "0",
        left: 0,
        overflow: "auto"}}>
        <div style={{width: "250px",
            height: "250px",
            position: "absolute",
            top: "0",
            right: "0",
            bottom: "0",
            left: "0",
            margin: "auto"}}>

            <h1 style={{"font-weight": "normal"}}>
                Панель входа в аккаунт
            </h1>
            <div>
            <h3 style={{"font-weight": "normal"}}>
                Логин
            <input  type={"text"} className={"InputInformationField"} style={{display: "block"}} onChange={(e) => {Login=e.target.value}}/>
            </h3>
            </div><div>
            <h3 style={{"font-weight": "normal"}}>
                Пароль
            <input type={"password"} className={"InputInformationField"} style={{display: "block"}} onChange={(e) => password=e.target.value}/>
            </h3>
            </div>
            <input className = "AgreeFormButton" value={"Войти"} type='button' onClick={(e) => {requestion().then(res=> {if (res.message) {alert (res.message)}
            else {GetUserRule(res)}
            //requestionDouble (res=> {alert (res)})
            })}}/>
        </div>    
        </div>
    )
}
export default AutorizationBlock;