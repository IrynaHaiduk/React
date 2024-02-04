import { useState } from "react";
import { changeColor } from '../../utils/changeColor';

function ChangeColor() {
    //Хук используется внутри компонента - внутри кастомных хуков
    //Хуки вызываются на верхнем уровне компонента (сверху перед return)
    //Хуки нельзя использовать внутри циклов и условных операторов

    const [color, setColor] = useState(changeColor()); // default value in ()
    //const [value, setValue] = useState(); //useState - это хук React, который позволяет вам добавить переменную состояния в ваш компонент.
    // value - переменная, к которой хранится наше состояние
    // setValue - функция, которая изменяет наше состояние 
    // чтобы поменять значение value, нужно вызвать функцию setValue с новым значением 
    // менять напрямую значение нельзя

    console.log(color, setColor);
    return (
        <div>
            {color}
        <h1 style={{color: color}}>This component change color</h1>
        <button onClick={() => setColor(changeColor())}>Change color</button>
        </div>
    );
}

export default ChangeColor;