//action wishlist redux

import { types } from "../types";

//Add new wishlist item
export const addWish = id => {
    return dispatch => {
        dispatch(wishlistStartAddNew());
        dispatch(wishlistAddNew(id));
        dispatch(wishlistAdded());
    };
};

const wishlistStartAddNew = () => ({
    type: types.wishlistStartAddNew,
});

const wishlistAddNew = id => ({
    type: types.wishlistAddNew,
    payload: id,
});

const wishlistAdded = () => ({
    type: types.wishlistAdded,
});

//Remove wishlist item
export const removeWish = id => {
    return dispatch => {
        dispatch(wishlistStartRemove());
        dispatch(wishlistRemove(id));
        dispatch(wishlistRemoved());
    };
};

const wishlistStartRemove = () => ({
    type: types.wishlistStartRemove,
});

const wishlistRemove = id => ({
    type: types.wishlistRemove,
    payload: id,
});

const wishlistRemoved = () => ({
    type: types.wishlistRemoved,
});

//Clear wishlist
export const clearWishes = () => {
    return dispatch => {
        dispatch(wishlistStartClear());
        dispatch(wishlistClear());
        dispatch(wishlistCleared());
    };
};

const wishlistStartClear = () => ({
    type: types.wishlistStartClear,
});

const wishlistClear = () => ({
    type: types.wishlistClear,
});

const wishlistCleared = () => ({
    type: types.wishlistCleared,
});

//Error wishlist
export const wishlistError = error => ({
    type: types.wishlistError,
    payload: error,
});
