import React from "react";
import { FaPlus } from "react-icons/fa";

const AddItem=({newItem,setNewItem,handleSubmit})=>{
    return(
        <form className="addForm" onSubmit={handleSubmit}>
            <label htmlFor="addItem">Add Items</label>
            <input autoFocus type="text" placeholder="Add Items" id="addItem"value={newItem} 
            onChange={(e)=>setNewItem(e.target.value)} required/>
            <button type="submit" aria-label="Add Item">
            <FaPlus />
            </button>
        </form>
    )
}
export default AddItem