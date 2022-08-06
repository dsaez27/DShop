import { types } from './../types';
import { fetchConToken, fetchSinToken } from '../../helpers/fetch';

//Login action
export const login = (email, password) => {
	return async dispatch => {
		dispatch(authStartLogin());
		try {
			const response = await fetchSinToken('auth/login', { email, password }, 'POST');
			const data = await response.json();

			if (data.ok) {
				localStorage.setItem('token', data.token);
				dispatch(authLogin(data));
			} else {
				dispatch(authLoginError(data.msg));
			}
		} catch (error) {
			dispatch(authLoginError('Error en el servidor'));
		}
	};
};

const authStartLogin = () => ({
	type: types.authStartLogin,
});

const authLogin = payload => ({
	type: types.authLogin,
	payload,
});

const authLoginError = payload => ({
	type: types.authLoginError,
	payload,
});

//Register action
export const Register = (firstname, lastname, email, phone, password) => {
	return async dispatch => {
		dispatch(authStartRegister());

		try {
			const resp = await fetchSinToken('auth/register', { firstname, lastname, email, phone, password }, 'POST');
			const body = await resp.json();

			if (body.ok) {
				localStorage.setItem('token', body.token);
				localStorage.setItem('token-init-date', new Date().getTime());

				dispatch(
					authRegister({
						token: body.token,
						user: body.user,
					})
				);
			}
		} catch (error) {
			dispatch(authRegisterError(error));
		}
	};
};

const authStartRegister = () => ({
	type: types.authStartRegister,
});

const authRegister = payload => ({
	type: types.authRegister,
	payload,
});

const authRegisterError = payload => ({
	type: types.authRegisterError,
	payload,
});

//Token renew action
export const TokenRenew = () => {
	return async dispatch => {
		dispatch(authStartTokenRenew());

		try {
			const token = localStorage.getItem('token');
			const tokenInitDate = localStorage.getItem('token-init-date');

			const resp = await fetchConToken('auth/token-renew', { token, tokenInitDate }, 'POST');

			const body = await resp.json();

			if (body.ok) {
				localStorage.setItem('token', body.token);
				localStorage.setItem('token-init-date', new Date().getTime());

				dispatch(
					authTokenRenew({
						token: body.token,
						user: body.user,
					})
				);
			}
		} catch (error) {
			dispatch(authTokenRenewError(error));
		}
	};
};

const authStartTokenRenew = () => ({
	type: types.authStartTokenRenew,
});

const authTokenRenew = payload => ({
	type: types.authTokenRenew,
	payload,
});

const authTokenRenewError = payload => ({
	type: types.authTokenRenewError,
	payload,
});

//Logout action
export const startLogout = () => {
	return dispatch => {
		localStorage.clear();
		dispatch(logout());
	};
};

const logout = () => ({
	type: types.authLogout,
});
