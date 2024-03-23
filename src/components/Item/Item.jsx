import React from "react";
import "./Item.css";
import { Link } from "react-router-dom";

export const Item = ({ producto }) => {
	return (
		<div className="card">
			<h3 className="card--title">{producto.title}</h3>
			<img
				className="card--img"
				src={producto.img}
				alt={producto.title}
			/>
			<div className="card--price">$ {producto.price}</div>
			{/* <ItemCount stock={producto.stock} /> */}
			{/* <button className="card--more">Ver más</button> */}
			<Link to={`/item/${producto.id}`} className='Option' > Ver detalles</Link>
		</div>
	);
};