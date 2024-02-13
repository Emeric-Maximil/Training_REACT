import { Clicker } from "./Clicker";
import { SearchBar } from "./SearchBar";

export function App(){

    return (
        <div>
            <SearchBar defaultText="Test Props"/>
            <SearchBar defaultText="Deuxieme texte"/>
            <Clicker/>
        </div>
    );
}