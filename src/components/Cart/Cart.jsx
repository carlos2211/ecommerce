
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { CartItemList } from "../CartItemList/CartItemList";
import "./Cart.css";


const Cart = () => {
	const { cartQuantity } = useContext(CartContext);

	if (cartQuantity === 0)
		return (
			<div className="MessageCartEmpty cc">
				Carrito Vacio 😒 <br />{" "}
				<Link className="MessageCartEmptyButton" to="/">
				Ir a comprar 😃
				</Link>
			</div>
		);

	return <CartItemList />;
};

export default Cart;
