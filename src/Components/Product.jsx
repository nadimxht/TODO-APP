import React from 'react'

export default function Product({cartItems , setCartItems , productData:{id , title , price,description, images , category }}) {
  
  const handleAdd=(id)=>{
    cartItems.find(e=>e.id===id) ? setCartItems((prev)=>prev.map(e=>e.id==id ? {...e , qte:e.qte+1} : e  ))
    :setCartItems((previous)=>[...previous ,{id , title , price,qte:1} ])
  }
  
  return (
    <div  className='col-4' style={{display:"flex" , flexDirection:"column",border:"1px solid black" , borderRadius:"1rem" , height:"70vh", margin:".5rem"}}>
      <h2>{title}</h2>
      <img style={{width:"30vw" , height:"35vh"}} src="/download.jpg" alt="image" />
      <span>{price} dt</span>
      <p>Category : {category.name}</p>
      <button onClick={()=>handleAdd(id)}>Add to cart </button>
    </div>
  )
}
