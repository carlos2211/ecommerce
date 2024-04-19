import React from "react";
import { useCount } from "../hooks/useCount";
import Swal from 'sweetalert2';

export const ItemCount = ({ prod }) => {
  const { count, decrement, increment, addToCart } = useCount();

  const handleAddToCart = () => {
    addToCart(prod);

    Swal.fire({
      title: 'Producto agregado al carrito',
      text: '¡El producto ha sido agregado exitosamente!',
      icon: 'success',
      confirmButtonText: 'Aceptar'
    });
  };

  return (
    <div>
      <div>
        <button onClick={decrement}>Restar</button>
        <span className="text-white m-3">{count}</span>
        <button onClick={increment}>Sumar</button>
      </div>
      <button className="mt-3" onClick={handleAddToCart}>Agregar al 🛒</button>
    </div>
  );
};
