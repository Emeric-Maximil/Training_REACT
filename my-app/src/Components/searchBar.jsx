import { useState } from "react";

export function SearchBar(){
    const [message, setMessage] = useState("");

    function handleMessage(event){
        setMessage( event.target.value );
    }

    return (
    <div>
        <input type="text"  onChange={handleMessage}/>
        <h1>{message}</h1>
    </div>
    );
}