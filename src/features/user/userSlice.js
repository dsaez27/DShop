import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { saveState, loadState } from "@/utils/localStorage";
import { fetchConToken, fetchSinToken } from "@/utils/fetch";

const userToken = loadState("token") || null;

const initialState = {
    loading: false,
    isAuth: false,
    userInfo: null,
    userToken,
    error: null,
};

export const login = createAsyncThunk(
    "auth/login",
    async (values, { rejectWithValue }) => {
        try {
            const { data } = await fetchSinToken("auth/login", values, "POST");
            saveState("token", data.token);
            return data;
        } catch (err) {
            return rejectWithValue(err);
        }
    }
);

export const register = createAsyncThunk(
    "auth/register",
    async (values, { rejectWithValue }) => {
        try {
            const { data } = await fetchSinToken(
                "auth/register",
                values,
                "POST"
            );
            saveState("token", data.token);
            return data;
        } catch (err) {
            return rejectWithValue(err);
        }
    }
);

export const logout = createAsyncThunk(
    "auth/logout",
    async (values, { rejectWithValue }) => {
        try {
            const { data } = await fetchConToken("auth/logout");
            return data;
        } catch (err) {
            return rejectWithValue(err);
        }
    }
);

const userSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        loginRequest: (state, { payload }) => {
            return {
                ...state,
                loading: true,
            };
        },
        loginSuccess: (state, { payload }) => {
            return {
                ...state,
                loading: false,
                isAuth: true,
                userInfo: payload.user,
                userToken: payload.token,
            };
        },
        loginFailure: (state, { payload }) => {
            return {
                ...state,
                loading: false,
                error: payload,
            };
        },
        registerRequest: (state, { payload }) => {
            return {
                ...state,
                loading: true,
            };
        },
        registerSuccess: (state, { payload }) => {
            return {
                ...state,
                loading: false,
                isAuth: true,
                userInfo: payload.user,
                userToken: payload.token,
            };
        },
        registerFailure: (state, { payload }) => {
            return {
                ...state,
                loading: false,
                error: payload,
            };
        },
        logoutRequest: (state, { payload }) => {
            return {
                ...state,
                loading: true,
            };
        },
        logoutSuccess: (state, { payload }) => {
            return {
                ...state,
                loading: false,
                isAuth: false,
                userInfo: null,
                userToken: null,
            };
        },
        logoutFailure: (state, { payload }) => {
            return {
                ...state,
                loading: false,
                error: payload,
            };
        },
    },
    extraReducers: {
        [login.pending]: (state, { payload }) => {
            return {
                ...state,
                loading: true,
            };
        },
        [login.fulfilled]: (state, { payload }) => {
            return {
                ...state,
                loading: false,
                isAuth: true,
                userInfo: payload.user,
                userToken: payload.token,
            };
        },
        [login.rejected]: (state, { payload }) => {
            return {
                ...state,
                loading: false,
                error: payload,
            };
        },
        [register.pending]: (state, { payload }) => {
            return {
                ...state,
                loading: true,
            };
        },
        [register.fulfilled]: (state, { payload }) => {
            return {
                ...state,
                loading: false,
                isAuth: true,
                userInfo: payload.user,
                userToken: payload.token,
            };
        },
        [register.rejected]: (state, { payload }) => {
            return {
                ...state,
                loading: false,
                error: payload,
            };
        },
        [logout.pending]: (state, { payload }) => {
            return {
                ...state,
                loading: true,
            };
        },
        [logout.fulfilled]: (state, { payload }) => {
            return {
                ...state,
                loading: false,
                isAuth: false,
                userInfo: null,
                userToken: null,
            };
        },
        [logout.rejected]: (state, { payload }) => {
            return {
                ...state,
                loading: false,
                error: payload,
            };
        },
    },
});

export const getUser = (state) => state.user;
export const getAuth = (state) => state.user.isAuth;
export const getUserToken = (state) => state.user.userToken;

export default userSlice.reducer;
