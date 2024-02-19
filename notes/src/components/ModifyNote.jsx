
export function ModifyNote(){



    return(
        <div>
            <form action="">
                <input type="checkbox" />
                <input type="text" onInput={handleTitle} value={title} hidden={isVisible} />
                <input type="text" onInput={handleContent} value={content} hidden={isVisible}/>
                <button hidden={isVisible} onClick={modifyNote}>Valider</button>
            </form>
        </div>
    );
}