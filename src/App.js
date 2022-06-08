import React, {useState } from 'react'
import TodoItems from "./components/TodoItems/TodoItems"
import AddItem from "./components/AddItems/AddItem"


const App = ()=> {
  const [state,setState] = useState([
        // {id:1,name:"Ahmed",age:32,address:"Bani Suef"},
        // {id:2,name:"Ali",age:21,address:"Helwan"},
        // {id:3,name:"Hussien",age:27,address:"Haram"},
    ]);

   // Delete Item 
    const deleteItem = (id)=>{
        let items =  state.filter(item => {
          return item.id !== id;
        })
        setState([...items]);
      }

   // Add new Item 
    const addItem = (item) =>{
      let items = state;
      item.id = Math.floor(Math.random()*1000);
      items.push(item);
        setState([...items]);
    }


    return (
      <div>{
          <div className='card'>
            <h2 className='text-sky-600 text-5xl p-3 font-bold'>TodoList App</h2>
            <AddItem addItem ={addItem} />
            <TodoItems  items={state} deleteItem = {deleteItem}/>
          </div>
      }</div>
    )
}

export default App;