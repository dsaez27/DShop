import { types } from '../types';

const initialState = {
	items: [],
	uid: null,
	loading: false,
	user: null,
	error: null,
};

export const cartReducers = (state = initialState, action) => {
	const { payload } = action;

	switch (action.type) {
		case types.cartStartAdd:
			return {
				...state,
				loading: true,
				error: null,
			};
		case types.cartAddNew:
			return {
				...state,
				items: [...state.items, payload],
				loading: false,
				error: null,
			};
		case types.cartAdded:
			return {
				...state,
				loading: false,
				error: null,
			};
		case types.cartStartRemove:
			return {
				...state,
				loading: true,
				error: null,
			};
		case types.cartRemove:
			return {
				loading: false,
				items: state.items.filter(item => item._id !== payload),
			};
		case types.cartRemoved:
			return {
				...state,
				loading: false,
				error: null,
			};
		case types.cartStartClear:
			return {
				...state,
				loading: true,
				error: null,
			};
		case types.cartClear:
			return {
				...state,
				loading: false,
				error: null,
			};
		case types.cartCleared:
			return {
				...state,
				loading: false,
				error: null,
			};
		case types.cartStartQtyChange:
			return {
				...state,
				loading: true,
				error: null,
			};
		case types.cartQtyChange:
			return {
				...state,
				items: state.items.map(item => {
					if (item._id === payload.id) {
						return {
							...item,
							counter: payload.qty,
						};
					}
					return item;
				}),
				loading: false,
				error: null,
			};
		case types.cartQtyChanged:
			return {
				...state,
				loading: false,
				error: null,
			};
		case types.cartStartPriceChange:
			return {
				...state,
				loading: true,
				error: null,
			};
		case types.cartPriceChange:
			if (payload.price === 0) {
				return {
					...state,
					items: state.items.filter(item => item._id !== payload._id),
					loading: false,
					error: null,
				};
			}
			return {
				...state,
				items: state.items.map(item => {
					if (item._id === payload._id) {
						item.price = payload.price;
					}
					return item;
				}),
				loading: false,
				error: null,
			};
		case types.cartPriceChanged:
			return {
				...state,
				loading: false,
				error: null,
			};

		default:
			return state;
	}
};
