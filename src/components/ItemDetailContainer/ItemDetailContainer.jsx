import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { products } from "../data/data";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import "./ItemDetailContainer.css";


export const ItemDetailContainer = () => {
	const { idItem } = useParams();

	const [myProduct, setMyProduct] = useState({});
	const myPromise = new Promise((resolve) => {
		setTimeout(() => {
			resolve(products);
		}, 1000);
	});
	useEffect(() => {

		const itemId = parseInt(idItem);

		myPromise.then((data) => {			
			setMyProduct(data.find((prod) => prod.id === itemId));
		});
	}, [idItem]);

	return (
		<div>
			<ItemDetail prod={myProduct} />
		</div>
	);
};