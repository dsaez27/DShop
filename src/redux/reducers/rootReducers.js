import { combineReducers } from 'redux';
import { authReducers } from './authReducers';
import { wishlistReducers } from './wishlistReducers';
import { cartReducers } from './cartReducers';

export const rootReducer = combineReducers({
	//* Reducers
	auth: authReducers,
	wishlist: wishlistReducers,
	cart: cartReducers,
});
