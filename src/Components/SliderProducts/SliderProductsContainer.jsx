import React, { useEffect, useState } from "react";
import { connect }                    from "react-redux";
import { toast }                      from "react-toastify";

// Our My Components
import SliderProducts     from "./SliderProducts";
import ShoppingCarActions from "Store/Actions/ShoppingCarActions";
import { instanceAxios }  from "Helpers";

const SliderProductsContainer = ({
	setIncrementCartItem,
}) => {

	const [ products, setProducts ] = useState([]);

	const getProducts = async () => {
		const res = await instanceAxios({
			method : "get",
			url    : "/products",
		});

		if (res.status === 200) {
			setProducts(res.data);
		}

	};

	const addItem = () => {
		toast("Se agrego correctamente al carrito", {
			autoClose    : 2000,
			pauseOnHover : true,
			draggable    : true,
			progress     : undefined,
			theme     	  : "dark",
		});

		setIncrementCartItem();
	};

	useEffect(() => {
		getProducts();
	}, []);

	return (
		<SliderProducts
			products={products}
			addItem={addItem}
		/>
	);
};

const mapDispatchToProps = (dispatch) => ({
	setIncrementCartItem : () => dispatch( ShoppingCarActions.setIncrementCartItem() ),
});


export default connect(null, mapDispatchToProps)(SliderProductsContainer);

