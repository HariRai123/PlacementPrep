import React, { useCallback, useState } from 'react'
import Product from './Product';
function App() {
  const [count,setCount]=useState(0);

   const products = [
    { id: 1, name: "Laptop" },
    { id: 2, name: "Phone" },
    { id: 3, name: "Headphones" },
    { id: 4, name: "Keyboard" },
    { id: 5, name: "Mouse" },
    { id: 6, name: "Monitor" },
    { id: 7, name: "Speaker" },
    { id: 8, name: "Webcam" },
    { id: 9, name: "Tablet" },
    { id: 10, name: "Smartwatch" }
  ];

  const handleAddToCart=useCallback(()=>{
    setCount(prev=>prev+1)
  },[])
  return (
    <div>
      <h2>Optimized Product List</h2>
      <h3>Cart count:{count}</h3>
      
      {
        products.map(product=>(
          <Product 
          key={product.id}
          product={product}
          onAddToCart={handleAddToCart}
          />
        ))
      }
    </div>
  )
}

export default App
