import React from "react";
import { useCount } from "../hooks/useCount";

export const ItemCount = () => {
	const { count, decrement, increment, addToCart } = useCount();

	return (
		<div>
			<div>
				<button onClick={decrement}>Restar</button>
				<span className="text-white m-3">{count}</span>
				<button onClick={increment}>Sumar</button>
			</div>
			<button  className=" mt-3" onClick={addToCart}>Agregar al 🛒</button>
		</div>
	);
};