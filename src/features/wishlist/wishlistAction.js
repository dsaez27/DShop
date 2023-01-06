import { createAsyncThunk } from "@reduxjs/toolkit";

//Wishlist actions
const getWish = createAsyncThunk(
    "wishlist/getWish",
    async (id, { rejectWithValue }) => {}
);

const getWishes = createAsyncThunk(
    "wishlist/getAll",
    async ({}, { rejectWithValue }) => {}
);

const addWish = createAsyncThunk(
    "wishlist/add",
    async (id, { rejectWithValue }) => {}
);

const updateWish = createAsyncThunk(
    "wishlist/update",
    async ({ id, values }, { rejectWithValue }) => {}
);

const removeWish = createAsyncThunk(
    "wishlist/delete",
    async (id, { rejectWithValue }) => {}
);

const removeWishes = createAsyncThunk(
    "wishlist/deleteAll",
    async ({}, { rejectWithValue }) => {}
);

export { getWishes, addWish, updateWish, removeWish, removeWishes };
