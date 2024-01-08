import React, { useState } from 'react'


export default function App() {

  const [inputData, setInputData] = useState("");
  const [Item,setItem] = useState([]);


  const addItem = () =>{
    if(!inputData){

    }

    else{
      setItem([...Item,inputData]);
      setInputData("");
    }
    
  }

  const deleteItem = (id) =>{
    // console.log(id);
      const updatedItem = Item.filter((curr,ind)=>{
        return ind != id;
      })

      setItem(updatedItem);


  }

  const removeAll = () =>{
    setItem([]);
  }

  

  return (
    <>
      <div className="container">
        <div className="todo-box">
            <h1>To Do List</h1>

            <div className="input-field">
              <input 
              type="text"
              value={inputData}
              onChange={(event)=>setInputData(event.target.value)}
              placeholder='Type anything which you want'
               />
              <button onClick={addItem} className='add-btn'>Add</button>
            </div>

            <div className="show-item">
             {
              Item.map((currEl,ind)=>{
                return (
                  <div className="item-wrapper" key={ind}>
                    <div className="each-item">
                      <h2>{currEl}</h2>
                    </div>
                    <button onClick={()=>{deleteItem(ind)}} className='rm-btn add-btn'>remove</button>
                  </div>
                )
              })
             }

            <div className="remove-all">
              <button onClick={removeAll} className='remove-all-btn'>Remove All</button>
            </div>
              
            </div>
        </div>
      </div>
    </>
  )
}
