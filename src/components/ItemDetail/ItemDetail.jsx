import React from "react";
import { ItemCount } from "../ItemCount/ItemCount";
import "./ItemDetail.css";

export const ItemDetail = ({ prod }) => {
	console.log(prod)
	return (
		<div style={{ textAlign: "-webkit-center" }}>
		<article className="CardItem">
				<h2 className="text-white">{prod.title}</h2>
			<picture>
				<img src={prod.img} alt={prod.name} />
			</picture>
			<section>
				<p className="text-white font-bold"> Categoria: {prod.category}</p>
				<p className="text-white font-bold"> Descripcion: {prod.description}</p>
				<p className="text-white font-bold text-lg"> Precio: {prod.price}</p>
			</section>
			<footer className="ItemFooter">
				<ItemCount initial={1} stock={prod.stock} prod={prod} onAdd={(quantity) => console.log('Cantidad Agregada')} />
			</footer>

		</article>
		</div>
	);
};