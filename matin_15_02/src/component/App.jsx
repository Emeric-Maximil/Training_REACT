import { Chrono } from "./Chrono";
import { Clicker } from "./Clicker";
import { ColorPicker } from "./ColorPicker";
import { Horloge } from "./Horloge";
import { TableauExemple } from "./TableauExemple";




export function App(){

    return (
        <div>
            <Clicker />
            <ColorPicker />
            <Horloge />
            <h1>Timer</h1>
            <Chrono/>
            <TableauExemple/>
        </div>
    );

}