import { useState } from "react";

export function Chrono(){
    
    const [tx,setTx]=useState(Date.now());
    const [t0,setT0]=useState(Date.now());
    const [isTrig,setTrig]=useState(false);

    const [temps,setTemps]=useState(new Date(tx-t0));
    console.log(new Date(tx));

    
    setTimeout(()=>{
        if(isTrig){
            console.log('chose');
            setTx((Date.now()));
            setTemps(new Date(tx-t0));
        }
    },1);

    function lancerChrono(){
         setT0(Date.now());
         setTx(Date.now());
         setTrig(true);  
    }
    function pauseChrono(){
        setTrig(false);
    }
    function resume(){
        setTrig(true);
    }
    return(
        <div>
            <p>
                minutes {temps.getMinutes()}
                : secondes {temps.getSeconds()}
                : milisecondes {temps.getMilliseconds()}
            </p>
            
            <button onClick={lancerChrono}>Start</button>
            <button onClick={pauseChrono}>Pause</button>
            <button onClick={resume}>repRendre</button>
        </div>
    );
}