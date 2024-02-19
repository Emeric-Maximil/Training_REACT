import { useState } from "react";
import { AddNote } from "./AddNote";
import { NoteList } from "./NoteList";
import { Note } from "./Note";




export function App(){
    const [notes,setNotes] = useState([
        {titre:"Titre1",contenu:"Lorem Ipsum dolor est"},
        {titre:"Titre2",contenu:"Voici le contenu"},
        {titre:"Titre3",contenu:"Je sais plus quoi dire"}
    ]);



    function onAddNote(note){
        setNotes( [...notes, note] );
    }
    
    const [titre, setTitre] = useState("Note En cours");
    const [contenu, setContenu] = useState("Contenu de la note en cours");
    function onNoteClick(note){
        setTitre(note["titre"]);
        setContenu(note["contenu"]);
    }

    function modifyNote(id,note){
        
    }






    return (
    <div>
        <NoteList notes={notes} onNoteClick={onNoteClick}/>
        <AddNote onAddNote={onAddNote}/>
        <Note titre={titre} contenu={contenu} modifyNote={modifyNote}/>
        

    </div>
    );
}