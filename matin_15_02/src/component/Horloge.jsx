import { useState } from "react";

export function Horloge(){
    const [date,setDate]=useState(new Date());
    setTimeout(()=>{
        setDate(new Date());
    },1);

    return (
        <div>
            <h1>Nous somme le {date.getUTCDay()}/{date.getMonth()+1}/{date.getFullYear()}</h1>
            <p>
                il est {date.getHours()}: {date.getMinutes()}:{date.getSeconds()}:{date.getMilliseconds()}
            </p>
        </div>
    );
}