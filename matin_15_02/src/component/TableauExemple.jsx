import { Product } from "./Product";

export function TableauExemple(){
    

const ordis = [
    {name :"ordi 1", price : 2300, stock:4, source:"http://unsplash.it/100/100"},
    {name :"ordi 2", price : 1580, stock:0, source:"http://unsplash.it/100/100"},
    {name :"ordi 3", price : 700, stock:1, source:"http://unsplash.it/100/100"},
    {name :"ordi 4", price : 200, stock:7, source:"http://unsplash.it/100/100"},
 ];




return(
    <div>
        <h1>Tableau</h1>
        <Product ordis={ordis}/>
    </div>
);

}