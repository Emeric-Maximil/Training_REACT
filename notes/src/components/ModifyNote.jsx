
export function ModifyNote({updateNote, titre, contenu}){
    
    function handleUpdate(event){
        event.preventDefault();
        const name = event.target.querySelector("#name").value;
        const content = event.target.querySelector("#content").value;
        updateNote({
            titre : name,
            contenu : content
        });
    }

    return(
        <div>
            <form onSubmit={handleUpdate}>
                <input type="checkbox" />
                <input id="name" type="text"/>
                <input id="content" type="text"/>
                <button  >Modifier</button>
            </form>
        </div>
    );
}