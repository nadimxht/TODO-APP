import React from 'react'
import Product from "./Product"
export default function ProductList({data , setCartItems}) {
  return (
    <div className='container-fluid'>
      <div className='row'>
         {data.map(el=>(
        <Product key={el.id} productData={el} setCartItems={setCartItems} />
      ))}
      </div>
     
    </div>
  )
}
