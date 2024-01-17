import React from 'react'

export default function Product({setCartItems , productData:{title , price,description, images , category }}) {
  return (
    <div  className='col-4' style={{display:"flex" , flexDirection:"column",border:"1px solid black" , borderRadius:"1rem" , height:"70vh", margin:".5rem"}}>
      <h2>{title}</h2>
      <img style={{width:"30vw" , height:"35vh"}} src="/download.jpg" alt="image" />
      <span>{price} dt</span>
      <p>Category : {category.name}</p>
      <button onClick={()=>setCartItems((previous)=>[...previous ,{title , price,description, images , category } ])}>Add to cart </button>
    </div>
  )
}
