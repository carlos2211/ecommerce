import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { CartItem } from "../CartItem/CartItem";
import Swal from 'sweetalert2';
import "./CartItemList.css";

export const CartItemList = () => {
    const { cart, totalCartValue, emptyCart } = useContext(CartContext);

    const handleEmptyCart = () => {
        // Mostrar SweetAlert de confirmación
        Swal.fire({
            title: '¿Estás seguro?',
            text: '¿Quieres vaciar el carrito?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí, vaciar carrito',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.isConfirmed) {
                // Si el usuario confirma, vaciar el carrito
                emptyCart();
                Swal.fire(
                    '¡Carrito vaciado!',
                    'El carrito ha sido vaciado correctamente.',
                    'success'
                );
            }
        });
    };

    return (
        <div>
            <h2 className="text-gray-50 text-center underline decoration-double">Carrito de compras</h2>
            <div className="ItemOnCartContainerList">
                {cart.map((product) => (
                    <div
                        key={product.id + "onCart"}
                        className="ItemOnCartContainerProduct">
                        <CartItem
                            id={product.id}
                            img={product.img}
                            title={product.title}
                            quantity={product.quantity}
                            price={product.price}
                        />
                    </div>
                ))}
                <div className="TotalCartPrice">Total Cart : ${totalCartValue}</div>
                <button className="EmptyCartButton" onClick={handleEmptyCart}>
                    Vaciar Carrito
                </button>
                <Link
                    to="/checkout"
                    className="FinishCartButton">
                    Terminar Compra
                </Link>
            </div>
        </div>
    );
};
