import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { createBuyOrder } from "../../services/firebase";
import { Loader } from "../Loader/Loader";
import "./CheckoutForm.css";

export const CheckoutForm = () => {
	const { cart, cartQuantity, emptyCart } = useContext(CartContext);
	const [loading, setLoading] = useState(false);
	const [idOrder, setIdOrder] = useState();
	const [userData, setUserData] = useState({
		name: "",
		email: "",
		items: "",
		date: "",
	});

	const handleChange = (event) => {
		const inputValue = event.target.value;
		const inputName = event.target.name;
		setUserData({ ...userData, [inputName]: inputValue });
	};

	const handleSubmit = (event) => {
		event.preventDefault();

		if (userData.name === "" || userData.email === "") return;

		let order = {
			name: userData.name,
			email: userData.email,
			items: cart,
			date: new Date(),
		};

		setLoading(true);
		createBuyOrder(order)
			.then((data) => {
				setIdOrder(data);
				emptyCart();
			})
			.finally(() => {
				setLoading(false);
				setUserData({
					name: "",
					email: "",
				});
			});
	};

	if (loading) return <Loader />;

	if (idOrder)
		return (
			<div className="container--orderid">
				<div className="container--orderid--text">Gracias por su compra</div>
				<div className="container--orderid--text">su ID de pedido es: </div>
				<div className="container--orderid--id">{idOrder}</div>
			</div>
		);

	if (cartQuantity === 0)
		return (
			<div className="MessageCartEmpty">
				Carrito Vacio 😒 <br />{" "}
				<Link className="MessageCartEmptyButton" to="/">
					Ir a comprar 😃
				</Link>
			</div>
		);

	return (
		<div className="form--container">
			<span className="mb-14 uppercase font-semibold">Finalizar Compra</span>
			<form className="form" onSubmit={handleSubmit}>
				<label className="label">
					Nombre:
					<input
						className="input"
						type="text"
						placeholder="Ingrese su nombre"
						name="name"
						value={userData.name}
						onChange={handleChange}
						required
					/>
				</label>
				<label className="label">
					Email:
					<input
						className="input"
						type="email"
						placeholder="Ingrese su apellido"
						name="email"
						value={userData.email}
						onChange={handleChange}
						required
					/>
				</label>
				<button type="submit" className="custom-btn btn-3">
					<span>Enviar</span>
				</button>
			</form>
		</div>
	);
};