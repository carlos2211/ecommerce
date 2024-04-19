import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getOneProducts } from "../../services/firebase";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { Loader } from "../Loader/Loader";

export const ItemDetailContainer = () => {
	const { idItem } = useParams();
	const [loading, setLoading] = useState(true);

	const [myProduct, setMyProduct] = useState({});
	useEffect(() => {
		getOneProducts(idItem)
			.then((data) => {
				setMyProduct(data);
			})
			.finally(() => setLoading(false));
	}, [idItem]);

	if (loading) return <Loader />;


	return (
		<div>
			<ItemDetail prod={myProduct} />
		</div>
	);
};