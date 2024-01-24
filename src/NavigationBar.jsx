import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { CiShoppingCart } from "react-icons/ci";
import Cart from './Components/Cart';
export default function NavigationBar({setCartItems , setPriceFilter , cartItems , setSearchWord , setCategory}) {
    const [show , setShow]=useState(false) ; 
    const HideCanvas=()=>{
        setShow(false);
    }
    const [Price , setPrice]= useState(0);
   
    
  return (
    <div>

        <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">E-shop</Navbar.Brand>
         
            <input type='text' placeholder='search products' onChange={(event)=>setSearchWord(event.target.value)} />
            
            <span>Category : </span><select onChange={(event)=>setCategory(event.target.value)}>
                <option value="">Choose an option</option>
                <option value="T-shirt">T-shirt</option>
                <option value="Clothes">Clothes</option>
            </select>

            <input type='range' min="0" max="100" onChange={(event)=>{setPrice(event.target.value); setPriceFilter(Price)}} />
            {Price}
         
          {/* icon */}
          <div>
          <div style={{backgroundColor:"red" , color:"white" , width:"1rem" , height:"1rem",borderRadius:"50%", fontSize:".7rem" , display:"flex", justifyContent:"center" , transform:"translate(2rem , 1.5rem)"}}>
            {cartItems.length}
          </div>
          
              <CiShoppingCart onClick={()=>setShow(true) } style={{cursor:"pointer"}} size={50} /> 
              </div>
          
        </Container>
        
      </Navbar>
      <Cart setCartItems={setCartItems} cartItems={cartItems} showCart={show} HideCanvas={HideCanvas}/>

    </div>
  )
}
