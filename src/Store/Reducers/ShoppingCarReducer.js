import {
	INCREMET_CART_ITEM,
} from "Store/Constants/ShoppingCarConstants";

const initialState = {
	count : 0,
};

const shoppingCarReducer = (state = initialState, action) => {
	switch (action.type) {
		case INCREMET_CART_ITEM:
			return {
				...state,
				count : state.count + 1,
			};
		default:
			return state;
	}
};

export default shoppingCarReducer;
