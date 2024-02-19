import { useState } from "react";

export function App({pokemons}){

    const [maxAttaque,setAttaque]=useState(100);
    const [isAlphaCroissant,setAlphabetCroissant]=useState(false);
    const [isAttaqueCroissant,setAttaqueCroissant]=useState(false);
    // const [isAlphaDecroissant,setAlphabetDecroissant]=useState(false);
    
    

    const filteredPokemons = pokemons.filter((pokemon)=>{
        return pokemon.stats.attack < maxAttaque;
    }).sort(function (a,b){
        if(isAttaqueCroissant){
            return a.stats.attack - b.stats.attack;
        }
    }).sort(function (a,b){
        if(isAlphaCroissant){
            return a.name.localeCompare(b.name);
        }
    })

    const pokemonsElements = filteredPokemons.map((pokemon,i)=>{
        return(
        <div key={i}>
            <p >
                {pokemon.name}, {pokemon.stats.attack}
            </p>
              <img src={pokemon.image} width="100" height="100"/>  
        </div>)
    })


    function handleAttaque(e){
        setAttaque(e.target.value);
    }

    function handleCroissant(){
        setAttaqueCroissant(!isAttaqueCroissant);
        console.log(isAttaqueCroissant);
    }
    function handleCroissantA(){
        setAlphabetCroissant(!isAlphaCroissant);
        console.log(isAlphaCroissant);
    }
    

    return(
        <div>
            <label >
                <span>{maxAttaque}</span>
                <input type="range"  max="150" defaultValue={50} onInput={handleAttaque}/>
            </label>

            <button onClick={handleCroissant}>Trier par attaque</button>
            <button onClick={handleCroissantA}>Trier Noms</button>

            {pokemonsElements}
        </div>
    );
}