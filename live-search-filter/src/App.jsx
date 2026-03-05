import React, { useMemo, useState } from 'react'

function App() {
  const [search,setSearch]= useState("");
   const items = [
    "Apple",
    "Banana",
    "Orange",
    "Mango",
    "Grapes",
    "Pineapple",
    "Strawberry",
    "Watermelon",
    "Papaya",
    "Kiwi"
  ];
  const filterediItems=useMemo(()=>(
    items.filter(item=>
      item.toLocaleLowerCase().includes(search.toLowerCase())
    )
  ),[search])
  return (
    <div>
      <h2>Live Search Filter</h2>
      <input type="text"
      placeholder='search your input'
      value={search}
      onChange={(e)=>setSearch(e.target.value)}
      />
      <ul>
        {
          filterediItems.length>0 ? (
            filterediItems.map((item,index)=>(
              <li key={index}>{item}</li>
            ))
          ):(
            <p>No results found</p>
          )
        }
      </ul>
    </div>
  )
}

export default App
