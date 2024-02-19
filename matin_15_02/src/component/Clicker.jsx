import { useState } from "react";

export function Clicker(){
    const [compteur, setCompteur]= useState(0);

    function incr(){
        setCompteur(compteur+1);
    }
    return (
        <div>
            <h1>{compteur}</h1>
            <button onClick={incr}>Ajouter 1</button>
        </div>
    );
}