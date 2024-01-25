import React, {useState} from 'react';  // state import

const ColorChanger = function () {
    const colorNames = ["red", "green", "blue", "yellow", "black", "white", "gray", "purple", "orange"];  // string from colors
    const [text, setText] = useState("My favorite color is blue!"); // state for the text displayed
    const [color, setColor] = useState(colorNames[2]);  // state for the current color

    const changeTextAndColor = () => {
        const randomColorIndex = Math.floor(Math.random() * colorNames.length); // random color generating

        setText("My favorite color is " + colorNames[randomColorIndex] + "!");  // updating the text state with a new text value including the new color

        setColor(colorNames[randomColorIndex]);  // update the color state with the new color from the array
    };

    return (
        <div>
            <h1 style={{color: color}}>{text}</h1>
            <button onClick={changeTextAndColor}>Change</button>
        </div>
    );

};

export default ColorChanger;