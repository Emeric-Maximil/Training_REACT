import { useState } from "react";

export function SearchBar({defaultText}){
    const [message, setMessage] = useState(defaultText);

    function handleMessage(event){
        setMessage( event.target.value );
    }

    return (
    <div>
        <input type="text" value={defaultText} onChange={handleMessage}/>
        <h1>{message}</h1>
    </div>
    );
}