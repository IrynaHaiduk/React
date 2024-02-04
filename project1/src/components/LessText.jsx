import React, { useState } from "react";


function LessText({ text, maxLengthText }) {
    let [isShow, setIsShow] = useState(false);

    //console.log(maxLengthText, text);

    if (maxLengthText >= text.length) {
        return (
            <p>
                {text}
            </p>);
    }

    return (
        <>
        {
            isShow ? <p>{text}</p> :  <p>{text.substring(0, maxLengthText)}...</p>
        }

        <button onClick={()=> setIsShow(!isShow)}>
            {isShow ? "Hide" : "Read more"}
        </button>
        </>
    )
        

}

export default LessText;