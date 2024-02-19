import { useState } from "react";
import { AddNote } from "./AddNote";
import { NoteList } from "./NoteList";
import { Note } from "./Note";
import { ModifyNote } from "./ModifyNote";

export function App(){
    const [notes,setNotes] = useState([
        {titre:"Titre1",contenu:"Lorem Ipsum dolor est"},
        {titre:"Titre2",contenu:"Voici le contenu"},
        {titre:"Titre3",contenu:"Je sais plus quoi dire"}
    ]);

    function onAddNote(newNote){
        if(!notes.find((note)=>note.titre == newNote.titre)){
            setNotes( [...notes, newNote]);  
        }else{
            console.log('Ce nom existe déja')
        }
    }
    
    const [titre, setTitre] = useState("Note En cours");
    const [contenu, setContenu] = useState("Contenu de la note en cours");

    const [id, setId] = useState(0);

    function onNoteClick(note){
        setTitre(note.titre);
        setContenu(note.contenu);
        
        notes.forEach((element,index) => {
            if(element.titre == note.titre){
                setId(index);
            }
        });
    }

    // console.log("id = "+id);

    function updateNote(note){
        if(!notes.find((elem)=>elem.titre== note.titre )){
            setTitre(note["titre"]);
            setContenu(note["contenu"]);
            notes.splice(id,1,note);
        }else{
            console.log("t'as pas le droit");
        }
    }

    return (
    <div>
        <NoteList notes={notes} onNoteClick={onNoteClick}/>
        <AddNote onAddNote={onAddNote}/>
        <Note titre={titre} contenu={contenu} />
        <ModifyNote updateNote={updateNote} titre={titre} contenu={contenu} />
    </div>
    );
}