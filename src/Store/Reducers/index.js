import { combineReducers } from "redux";

// Import Own Components
import shoppingCarReducer from "./ShoppingCarReducer";

export const reducers = {
	shoppingCarReducer,
};

const rootReducers = combineReducers(reducers);

export default rootReducers;
