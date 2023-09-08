import React from "react";
import LineItem from "./LineItem";

const ItemList=({items,handleCheck,deletefn})=>{
    return(
        <ul>
                {items.map((item)=>(
                    <LineItem 
                    item={item}
                    key={item.id}
                    handleCheck={handleCheck}
                    deletefn={deletefn}
                    />
                ) )}
            </ul>

    )
}

export default ItemList