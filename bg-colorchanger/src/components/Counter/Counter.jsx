import React, { useState } from 'react'

const Counter = () => {
    let [counter,setCounter]=useState(0)
    function handleIncrease()
    {
        setCounter(counter+1)
    }
    function handleDecrease()
    {
        setCounter(counter-1)
    }
  return (
    <div>
   {counter}

    <br/>
    <br/>
    <button onClick={handleIncrease}>Increse Value</button>
    <button onClick={handleDecrease}>Decrease Value</button>
    </div>
  )
}

export default Counter