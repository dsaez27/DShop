import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { loadState, saveState } from "./redux/localStorage";
import { rootReducer } from "./redux/reducers/rootReducers";

const persistState = loadState();
const middlewares = [thunk];

// Compose enhancers Se utiliza para agregar middleware a la tienda.
const composeEnhancers =
    (typeof window !== "undefined" &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
    compose;

const store = createStore(
    rootReducer,
    persistState,
    composeEnhancers(applyMiddleware(...middlewares))
);

store.subscribe(() => {
    saveState(store.getState());
});

export default store;
