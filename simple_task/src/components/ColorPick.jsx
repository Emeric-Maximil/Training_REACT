import { useState } from "react";



export function ColorPick(){
    const [red,setRed]=useState(108);
    const [green,setGreen]=useState(2);
    const [blue,setBlue]=useState(119);
    const [alpha,setAlpha]=useState(1);

    const colorPickThing={
        height : 100,
        width : 100,
        backgroundColor:"rgba("+red+","+green+","+blue+","+alpha+")"
    };

    function updateRed(e){
        console.log((e.target.value));
        setRed((e.target.value/100)*255);
    } 
    function updateGreen(e){
        setGreen((e.target.value/100)*255);
    } 
    function updateBlue(e){
        setBlue((e.target.value/100)*255);
    }
    function updateAlpha(e){
        setAlpha(e.target.value/100);
    }


    return(
        <div>
            <div style={colorPickThing}></div>
            <span>Red</span>
            <input type="range" onInput={updateRed} />

            <span>Green</span>
            <input type="range" onInput={updateGreen} />

            <span>Blue</span>
            <input type="range" onInput={updateBlue} />

            <span>Alpha</span>
            <input type="range" onInput={updateAlpha} />
        </div>
    );
}