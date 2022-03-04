// Import Own Components
import {
	INCREMET_CART_ITEM,
} from "Store/Constants/ShoppingCarConstants";

const setIncrementCartItem = () => {
	return {
		type : INCREMET_CART_ITEM,
	};
};

const ShoppingCarActions = {
	setIncrementCartItem,
};

export default ShoppingCarActions;
