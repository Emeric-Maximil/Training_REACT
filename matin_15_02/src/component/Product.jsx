import { useState } from "react";

export function Product({ordis}){
    const [maxPrice,setMaxPrice]=useState(2000);
    const [maxStock,setMaxStock]=useState(1);

    const filteredProductsByPrice = ordis.filter((ordi)=>{
        return ordi.price < maxPrice;
    });

    const filteredProductsByStock = filteredProductsByPrice.filter((ordi)=>{
        return ordi.stock > maxStock;
    })

    const filteredProductsByTime = filteredProductsByStock.filter((ordi)=>{
        return ordi.stock > maxStock;
    })

    const ordisElements = filteredProductsByTime.map((ordi,i)=>{
        return(<div key={i}>
            <p >
            {ordi.name}, {ordi.price} € stock = {ordi.stock}
            </p>
            <img src={ordi.source}  />
            </div>)
    })
    

    function handlePrice(e){
        setMaxPrice(e.target.value);
    }
    function handleStock(e){
        setMaxStock(e.target.value);
    }

    

    return(
        <div>
            <label >
                <span>{maxPrice}</span>
                <input type="range"  max="2500" defaultValue={2000} onInput={handlePrice}/>
            </label>
            <label >
                <span>{maxStock}</span>
                <input type="range"  max="10" defaultValue={1} onInput={handleStock}/>
            </label>
            {ordisElements}
        </div>
    );
}