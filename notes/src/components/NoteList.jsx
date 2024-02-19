import { Note } from "./Note";



export function NoteList({notes, onNoteClick}){
    function handleClick(note){
        const titre = note["titre"];
        const contenu = note["contenu"];

        onNoteClick({
            titre : titre,
            contenu : contenu,
           
        });
    }
    
    const notesElements = notes.map(
        (note,i) => (
            <ul key={i} onClick={()=>{handleClick(note)}}>
                <li><Note titre={note['titre']} contenu={note['contenu']} /></li>   
            </ul>
            ));

    return(
        <div>
            <ul>
                {notesElements}
            </ul>
        </div>
    );
}