import { types } from "../types";

const initialState = {
    token: localStorage.getItem("token"),
    uid: null,
    ok: null,
    user: null,
    error: null,
};

export const authReducers = (state = initialState, action) => {
    const { payload } = action;

    switch (action.type) {
        case types.authStartLogin:
            return {
                ...state,
                ok: true,
                error: null,
            };
        case types.authLogin:
            return {
                ...state,
                token: payload.token,
                uid: payload.uid,
                ok: false,
                user: payload.user,
                error: null,
            };
        case types.authStartRegister:
            return {
                ...state,
                ok: true,
                error: null,
            };
        case types.authStartTokenRenew:
            return {
                ...state,
                ok: true,
                error: null,
            };
        case types.authLogout:
            return {
                ...state,
                token: null,
                uid: null,
                ok: false,
                user: null,
                error: null,
            };
        case types.authChecking:
            return {
                ...state,
                ok: true,
                error: null,
            };
        case types.authCheckingFinish:
            return {
                ...state,
                ok: false,
                error: null,
            };

        case types.authError:
            return {
                ...state,
                ok: false,
                error: payload,
            };

        default:
            return state;
    }
};
