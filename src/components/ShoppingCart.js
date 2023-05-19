import React from "react";
import '../styles/ShoppingCart.css'

export default function ShoppingCart({setShow, size}) {
    return (
        <nav>
            <div className="nav_box">
                <span className="my_shop" onClick={() => setShow(true)}><b>My Menu</b></span>
                <div className="cart" onClick={() => setShow(false)}>
                    <span>
                        <i class="fas fa-cart-plus"></i>
                    </span>
                    <span>{size}</span>
                </div>
            </div>
        </nav>
    )
}