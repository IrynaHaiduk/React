import { useEffect, useState } from "react";
import ChangeColor from "../ChangeColor/ChangeColor";
import { changeColor } from "../../utils/changeColor";

const Effect = () => {
//used inside functional component on the top level
//not used inside circles, if else operators
//has 2 parametrs - 1 - callbackfunction, 2 - array of dependencies

const [count, setCount] = useState(Number(localStorage.getItem('count')));
const [color, setColor] = useState(changeColor);

useEffect(() => {
    localStorage.setItem('count', count);
}, [count]);

//if second argument empty array - useEffect works only 1 time on mounting element
    // useEffect(() => console.log('I am on mount'), []);//works only on mounting element
    // useEffect(() => console.log('I am on render'));//works every time after every rendering element
    // useEffect(() => console.log(`I change only with ${color}`), [color]);//works every time after very rendering element
     useEffect(() => console.log(`I change only with ${count}`), [count]);//works every time after very rendering element
    // useEffect(() => console.log(`I change only with ${count} and ${color}`), [color, count]);//works every time after very rendering element
   
   return (<div style={{backgroundColor: color}}>
        Effect
        <p>{count}</p>
        <button onClick = {() => setCount(count + 1)}>Click</button>
        <button onClick = {() => setColor(changeColor())}>changeColor</button>
    </div>);
}

export default Effect;