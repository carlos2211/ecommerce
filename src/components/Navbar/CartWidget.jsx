import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
    const { cartQuantity } = useContext(CartContext);
	return (
		<Link className="CartQuantity" to={"/cart"}>
			<div className="text-xl mr-4">{cartQuantity}🛒</div>
		</Link>
	);
}
export default CartWidget;