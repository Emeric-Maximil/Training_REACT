import { useState } from "react";

export function Horloge(){
    const [date, setDate]= useState(new Date());
    setTimeout(()=>{
        setDate(new Date());
    },1);

return(
    <div>
        <p>Nous sommes le mercredi {date.getUTCDay()}/{date.getMonth()+1}/{date.getFullYear()}</p>
        <p>Il est {date.getHours()}:{date.getMinutes()}:{date.getSeconds()}:{date.getMilliseconds()}</p>
    </div>
);



}