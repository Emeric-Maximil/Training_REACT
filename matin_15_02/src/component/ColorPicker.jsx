import { useState } from "react";

export function ColorPicker(){
    const [red, setRed]=useState(100);
    const [green, setGreen]=useState(100);
    const [blue, setBlue]=useState(100);
    const [alpha, setAlpha]=useState(100);

    const color = {
        width:100,
        height:100,
        backgroundColor:"rgba("+red+","+green+","+blue+","+alpha+")"
    }
    function updateRed(e){
        setRed((e.target.value/100)*255);
    }
    function updateGreen(e){
        setGreen((e.target.value/100)*255);
    }
    function updateBlue(e){
        setBlue((e.target.value/100)*255);
    }
    function updateAlpha(e){
        setAlpha((e.target.value/100));
    }

    return (
        <div>
            <div style={color}></div>
            <span>Red</span><input type="range" onInput={updateRed} />
            <span>Green</span><input type="range" onInput={updateGreen} />
            <span>Blue</span><input type="range" onInput={updateBlue} />
            <span>Alpha</span><input type="range" onInput={updateAlpha} />
        </div>
    );
}