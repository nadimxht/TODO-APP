import React from 'react'
import Offcanvas from 'react-bootstrap/Offcanvas';

export default function Cart({setCartItems, cartItems, showCart, HideCanvas}) {
    return (
        <Offcanvas
            style={{
                width: "50%"
            }}
            show={showCart}
            onHide={HideCanvas}>
            <Offcanvas.Header closeButton="closeButton">
                <Offcanvas.Title>Cart</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                {
                    cartItems.length != 0
                        ? cartItems.map(e => (
                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "space-around"
                                }}>
                                <p>{e.title}
                                </p>
                                <span>{e.price}</span>
                                <div>
                                    <button
                                    onClick={()=>setCartItems(prev=>prev.map(el=>el.id===e.id? {...el , qte:el.qte-1} : el))}
                                        style={{
                                            backgroundColor: "white",
                                            border: ".1rem solid black"
                                        }}>-</button>
                                    {e.qte}
                                    <button
                                     onClick={()=>setCartItems(prev=>prev.map(el=>el.id===e.id? {...el , qte:el.qte+1} : el))}

                                        style={{
                                            backgroundColor: "white",
                                            border: ".1rem solid black"
                                        }}>+</button>

                                </div>
                                <button
                                    style={{
                                        backgroundColor: "white",
                                        border: ".1rem solid black"
                                    }}
                                    onClick={() => setCartItems((prev) => prev.filter(el => el.id != e.id))}>Delete</button>
                            </div>
                        ))
                        : <p>no items added</p>
                }

                Total : {cartItems.reduce((tot, e) => e.price*e.qte + tot, 0)}
            </Offcanvas.Body>
        </Offcanvas>
    )
}
