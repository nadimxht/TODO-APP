import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { CiShoppingCart } from "react-icons/ci";
import Cart from './Components/Cart';
export default function NavigationBar({cartItems , setSearchWord , setCategory}) {
    const [show , setShow]=useState(false) ; 
    const HideCanvas=()=>{
        setShow(false);
    }
   
    
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
         
          {/* icon */}
            <CiShoppingCart onClick={()=>setShow(true) } style={{cursor:"pointer"}} size={50} /> 

        </Container>
        
      </Navbar>
      <Cart cartItems={cartItems} showCart={show} HideCanvas={HideCanvas}/>

    </div>
  )
}
