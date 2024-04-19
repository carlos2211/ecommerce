import React from "react";
import CartWidget from './CartWidget';
import { Link, NavLink } from 'react-router-dom';
import "./Navbar.css"
import logo from '../../assets/svg-6.svg'

const Navbar = () => {
    return (
        <nav className='containerNav' >
            <Link to="/">
            <img src={logo} alt="logo" style={{ width: '45px', paddingLeft: '10px' }} />

            </Link>
            <ul className="containerNav--ul">      
                <Link className="containerNav--ul--li uppercase" to="/">Inicio </Link>          
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
