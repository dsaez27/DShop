import { types } from '../types';

const initialState = {
    items: [],
    loading: false,
    error: null,
};

export const wishlistReducers = (state = initialState, action) => {
    const { payload } = action;

    switch (action.type) {
        case types.wishlistStartAddNew:
            return {
                ...state,
                loading: true,
                error: null,
            };

        case types.wishlistAddNew:
            if (state.items.find((item) => item === payload)) {
                return state;
            } else {
                return {
                    ...state,
                    items: [...state.items, payload],
                };
            }

        case types.wishlistAdded:
            return {
                ...state,
                loading: false,
                error: null,
            };

        case types.wishlistStartRemove:
            return {
                ...state,
                loading: true,
                error: null,
            };

        case types.wishlistRemove:
            return {
                ...state,
                loading: false,
                error: null,
                items: state.items.filter((item) => item !== payload),
            };

        case types.wishlistRemoved:
            return {
                ...state,
                loading: false,
                error: null,
            };

        case types.wishlistStartClear:
            return {
                ...state,
                loading: true,
                error: null,
            };

        case types.wishlistClear:
            return {
                ...state,
                loading: false,
                error: null,
                items: [],
            };

        case types.wishlistCleared:
            return {
                ...state,
                loading: false,
                error: null,
            };

        case types.wishlistError:
            return {
                ...state,
                loading: false,
                error: payload,
            };

        default:
            return state;
    }
};
