import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice = createSlice({
    name: "wishlist",
    initialState: {
        wishes: [],
        loading: false,
        error: null,
    },
    reducers: {
        addWish: (state, action) => {
            return {
                ...state,
                wishes: [...state.wishes, action.payload],
            };
        },
        removeWish: (state, action) => {
            return {
                ...state,
                wishes: state.wishes.filter((wish) => wish !== action.payload),
            };
        },
        updateWish: (state, action) => {
            return {
                ...state,
                wishes: state.wishes.map((wish) =>
                    wish === action.payload ? action.payload : wish
                ),
            };
        },
        removeWishes: (state, action) => {
            return {
                ...state,
                wishes: [],
            };
        },
    },
});

export const { addWish, removeWish, updateWish, removeWishes } =
    wishlistSlice.actions;

export default wishlistSlice.reducer;
