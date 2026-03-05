import React from 'react'

const Product = React.memo(({product,onAddToCart})=>{
    console.log(`Rendering ${product.name}`)
    return(
        <div style={{marginBottom:"10px"}}>
            <span>{product.name}</span>
            <button onClick={onAddToCart}>Add to cart</button>
        </div>
    )
    
}) 
 

export default Product