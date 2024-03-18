import CartWidget from './CartWidget';
import { Link, NavLink } from 'react-router-dom';
import "./Navbar.css"

const Navbar = () => {
    return (
        <nav className='containerNav' >
            <div>👓</div>
            <ul>
                <li> 
                    <Link to="/RopaHombre">Ropa Hombre </Link>
                    <NavLink className="nav-link" to ="/"></NavLink>
                </li>
                <li> 
                    <Link to="/RopaMujer">Ropa Mujer </Link>
                </li>
                <li> 
                    <Link to="/RopaNinos">Ropa Niños </Link>
                </li>
                <li> 
                    <Link to="/Accesorios">Accesorios </Link>
                </li>
            </ul>
            <CartWidget/>
        </nav>
    );
}

export default Navbar;
