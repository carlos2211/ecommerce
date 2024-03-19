import React, { useState } from "react";

export const useCount = () => {
	const [count, setCount] = useState(1);

	const decrement = () => {
		if (count > 1) {
			setCount(count - 1);
		}
	};
	const increment = () => {
		setCount(count + 1);
	};

	const addToCart = () => {
		setCount(1);
		console.log("Agregado al carrito");
	};

	return { count, decrement, increment, addToCart };
};