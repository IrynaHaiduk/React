import { useState } from "react";


const Counter = () => {
    const [counter, setCounter] = useState(0);
    const handleMinus= () => {
        setCounter(counter - 1);
    };
    
    return ( 
        
        <div>
            <p>{counter}</p>
            <button onClick={()=> setCounter(counter + 1)}>+</button>
            <button onClick={handleMinus}>-</button>
            <button onClick={()=> setCounter(0)}>reset</button>
        </div>
    );
}

export default Counter;