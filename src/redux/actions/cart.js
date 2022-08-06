import { types } from '../types';

//Add new item to cart
export const addItem = item => {
	return dispatch => {
		dispatch(cartStartAdd());
		dispatch(cartAddNew(item));
		dispatch(cartAdded());
	};
};

const cartStartAdd = () => ({
	type: types.cartStartAdd,
});

const cartAddNew = item => ({
	type: types.cartAddNew,
	payload: item,
});

const cartAdded = () => ({
	type: types.cartAdded,
});

//Remove item from cart
export const removeItem = id => {
	return dispatch => {
		dispatch(cartStartRemove());
		dispatch(cartRemove(id));
		dispatch(cartRemoved());
	};
};

const cartStartRemove = id => ({
	type: types.cartStartRemove,
});

const cartRemove = id => ({
	type: types.cartRemove,
	payload: id,
});

const cartRemoved = () => ({
	type: types.cartRemoved,
});

//Clear cart
export const clearItem = () => {
	return dispatch => {
		dispatch(cartStartClear());
		dispatch(cartClear());
		dispatch(cartCleared());
	};
};

const cartStartClear = () => ({
	type: types.cartStartClear,
});

const cartClear = () => ({
	type: types.cartClear,
});

const cartCleared = () => ({
	type: types.cartCleared,
});

//Error Cart
export const cartError = error => ({
	type: types.cartError,
	payload: error,
});

//Change quantity in cart item
export const qtyChange = (id, qty) => {
	return dispatch => {
		dispatch(cartStartQtyChange());
		dispatch(cartQtyChange(id, qty));
		dispatch(cartQtyChanged());
	};
};

const cartStartQtyChange = () => ({
	type: types.cartStartQtyChange,
});

const cartQtyChange = (id, qty) => ({
	type: types.cartQtyChange,
	payload: { id, qty },
});

const cartQtyChanged = () => ({
	type: types.cartQtyChanged,
});

//Change price in cart item
export const priceChange = (id, price) => {
	return dispatch => {
		dispatch(cartStartPriceChange());
		dispatch(cartPriceChange(id, price));
		dispatch(cartPriceChanged());
	};
};

const cartStartPriceChange = () => ({
	type: types.cartStartPriceChange,
});

const cartPriceChange = (id, price) => ({
	type: types.cartPriceChange,
	payload: { id, price },
});

const cartPriceChanged = () => ({
	type: types.cartPriceChanged,
});
