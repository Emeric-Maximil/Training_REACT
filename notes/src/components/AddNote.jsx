export function AddNote({onAddNote}){


    function handleSubmit(event){
        event.preventDefault();
        const name = event.target.querySelector("#name").value;
        const content = event.target.querySelector("#content").value;
        
        onAddNote({
            titre : name,
            contenu : content
        });
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input id="name" type="text" placeholder="Titre"/>
                <input id="content" type="text" placeholder="Text" />
                <button>Valider</button>
            </form>
        </div>
    );
}