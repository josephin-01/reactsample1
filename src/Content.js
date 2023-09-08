import React from 'react'
import ItemList from './ItemList'

const Content=({items,handleCheck,deletefn})=>{
   

    

    return(
        <main>
            {(items.length) ? (
            <ItemList 
            items={items}
            handleCheck={handleCheck}
            deletefn={deletefn}/>
 )
:(
    <p>Your list is empty</p>
)
}
</main>
)
    }


export default Content