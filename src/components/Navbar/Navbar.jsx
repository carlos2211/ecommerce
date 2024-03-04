import CartWidget from './CartWidget';
import "./Navbar.css"

const Navbar = () => {
    return (
        <nav className='containerNav' >
            <div className='p-3'>👓</div>
            <ul>
                <li>Ropa Hombre</li>
                <li>Ropa Muejer</li>
                <li>Ropa Niños</li>
                <li>Accesorios</li>
            </ul>
            <CartWidget className='cartWidget'/>
        </nav>
    );
}

export default Navbar;
