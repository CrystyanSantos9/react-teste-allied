import React from "react";
import {
    Link
  } from "react-router-dom";

const Cart = ( )=>{
    return(
        <div>
            <section>Conteudo</section>
            <aside>Lado</aside>
            <button><Link to="/">Eu quero!</Link></button>
        </div>  
    )
}

export default Cart;