import React from "react";
import CartWidget from './CartWidget';
import { Link, NavLink } from 'react-router-dom';
import "./Navbar.css"

const Navbar = () => {
    return (
        <nav className='containerNav' >
            <Link to="/">
                <div>👓</div>
            </Link>
            <ul className="containerNav--ul">                
                <Link className="containerNav--ul--li uppercase" to="category/RopaHombre">Ropa Hombre </Link>
                <Link className="containerNav--ul--li uppercase" to="category/RopaMujer">Ropa Mujer </Link>         
                <Link className="containerNav--ul--li uppercase" to="category/RopaNinos">Ropa Niños </Link>
                <Link className="containerNav--ul--li uppercase" to="category/Accesorios">Accesorios </Link>
                
            </ul>
            <CartWidget/>
        </nav>
    );
}

export default Navbar;
