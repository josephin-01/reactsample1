import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";
import './App.css';
import { useState } from "react";
import AddItem from "./AddItem";

function App(){
  const [items,setItems]=useState(
    [
        {
            id:1,
            checked:true,
            item:"coding-react"
        },
        {
            id:2,
            checked:false,
            item:"coding-c"
        },
        {
            id:3,
            checked:false,
            item:"coding-python"
        }

    ]
)
const [newItem,setNewItem]=useState('')

const addItem=(item)=>{
    const id=items.length ? items[items.length-1].id + 1 : 1;
    const addNewItem={id,checked:false,item}
    const listItems=[...items,addNewItem]
    setItems(listItems)
    localStorage.setItem("todo_list",JSON.stringify(listItems))
}
const handleCheck=(id)=>{
    const listItems=items.map((item)=>
    item.id===id ? {...item,checked:!item.checked} : item )
    setItems(listItems)
    
}
const deletefn=(id)=>{
    const listItems1=items.filter((item)=>
    item.id!==id)
    setItems(listItems1)
    localStorage.setItem("todo_list",JSON.stringify(listItems1))
}

const handleSubmit=(e)=>{
    e.preventDefault()
    if(!newItem) return;
    console.log(newItem) 
    //add item
    addItem(newItem)
    setNewItem('')
}

  return (
    <div className="App">
         <Header title="Today list"/>
         <AddItem 
            newItem={newItem}
            setNewItem={setNewItem}
            handleSubmit={handleSubmit}
         />
         <Content
         items={items}
         handleCheck={handleCheck}
         deletefn={deletefn}
         />
         <Footer 
              length={items.length}
         />
    </div>
  );
}

export default App;
