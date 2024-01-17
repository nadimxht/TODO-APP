import React from 'react'
import Offcanvas from 'react-bootstrap/Offcanvas';

export default function Cart({cartItems , showCart , HideCanvas}) {
  return (
    <Offcanvas show={showCart} onHide={HideCanvas}  >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {
            cartItems.length!=0 ? cartItems.map(e=>(<div><h2>{e.title} </h2> <span>{e.price}</span> </div> ) ) : <p>no items added</p>
          }

          Total : {cartItems.reduce((tot,e)=>e.price+tot , 0)}
        </Offcanvas.Body>
      </Offcanvas>
  )
}
