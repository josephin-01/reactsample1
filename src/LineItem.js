import React from "react";
import {  FaTrashAlt } from 'react-icons/fa'
const LineItem=({item,handleCheck,deletefn})=>{
    return(
        <li className='list' key={item.id}>
                        <input 
                        type="checkbox" 
                        checked={item.checked} 
                        onChange={()=>handleCheck(item.id)}/>
                        <label 
                        style={(item.checked)?{textDecoration:'line-through'}:null}
                        onDoubleClick={()=>handleCheck(item.id)}>{item.item}</label>
                        <FaTrashAlt 
                        role="button"
                        tabIndex="0" 
                        aria-label={`Delete $(item.item)`}
                        onClick={()=>deletefn(item.id)}/>

                    </li>
    )
}

export default LineItem