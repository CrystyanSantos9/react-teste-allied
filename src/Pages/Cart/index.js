import React from "react";
import {
    Link
  } from "react-router-dom";
import Form from "../../components/Form";

const Cart = ( )=>{
    return(
        <div>
            <section>
                <Form />
            </section>
            <aside>Lado</aside>
            <button><Link to="/">Eu quero!</Link></button>
        </div>  
    )
}

export default Cart;