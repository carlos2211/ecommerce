import { useContext } from "react";
import Swal from 'sweetalert2';
import { CartContext } from "../../context/CartContext";
import "./CartItem.css";

export const CartItem = ({ id, img, title, quantity, price }) => {
    const { removeProduct } = useContext(CartContext);

    const handleRemoveProduct = () => {
        // Mostrar SweetAlert de confirmación
        Swal.fire({
            title: '¿Estás seguro?',
            text: '¿Quieres eliminar este producto del carrito?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí, eliminar producto',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.isConfirmed) {
                // Si el usuario confirma, eliminar el producto del carrito
                removeProduct(id);
                Swal.fire(
                    '¡Producto eliminado!',
                    'El producto ha sido eliminado del carrito.',
                    'success'
                );
            }
        });
    };

    return (
        <>
            <div className="ItemOnCartContainerProductImgContainer">
                <img
                    className="ItemOnCartContainerProductImg"
                    src={img}
                    alt="producto a comprar"
                />
            </div>
            <div className="ItemOnCartContainerProductInfo">
                <p className="ItemOnCartContainerProductTitle">{title}</p>
                <p className="ItemOnCartContainerProductPrecio">
                    Price : US$ {price}
                </p>
                <p className="ItemOnCartContainerProductCantidad">
                    Quantity : {quantity}
                </p>
                <p className="ItemOnCartContainerProductPrecio">
                    Total Product : US$ {(price * quantity).toFixed(2)}
                </p>
            </div>
            <div className="ItemOnCartContainerProductDelete">
                <div
                    className="ItemOnCartContainerProductDeleteIcon"
                    onClick={handleRemoveProduct}>
                    ❌
                </div>
            </div>
        </>
    );
};
