import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { products } from "../data/data";
import { ItemList } from "../ItemList/ItemList";
import "./ItemListContainer.css";

 const ItemListContainer = (props) => {
	const { idCategory } = useParams();
	const [myProducts, setMyProducts] = useState([]);
	const myPromise = new Promise((resolve) => {
		setTimeout(() => {
			resolve(products);
		}, 1500);
	});
	useEffect(() => {
		myPromise.then((data) => {
			setMyProducts(
				idCategory
					? data.filter((prod) => prod.category === idCategory)
					: data
			);
		});
	}, [idCategory]);

	return (
		<div className="container--cards">
			<ItemList products={myProducts} />
		</div>
	);
};

export default ItemListContainer;