import { configureStore, combineReducers, compose } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer } from "redux-persist";
import wishlistSlice from "./features/wishlist/wishlistSlice";
import userSlice from "./features/user/userSlice";

const persistConfig = {
    key: "root",
    storage,
};

const persistedReducer = persistReducer(
    persistConfig,
    combineReducers({
        user: userSlice,
        wishlist: wishlistSlice,
    })
);

export const store = configureStore(
    {
        reducer: persistedReducer,
        devTools: process.env.NODE_ENV !== "production",
        middleware: [thunk],
    },
    (window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()) ||
        compose
);

export const persistor = persistStore(store);
