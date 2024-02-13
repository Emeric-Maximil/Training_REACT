import { useState } from "react";

export function Clicker(){
    const [chiffre, setChiffre] = useState(0);

    function handleChiffre(){
        setChiffre(chiffre+1);
    }

    return (
        <div>
            <button onClick={handleChiffre}>{chiffre}</button>
        </div>
    );




}