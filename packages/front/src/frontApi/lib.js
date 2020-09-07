import { Cookies } from 'react-cookie';
import { API_URL } from '../configure';

export const requestJson = (path, body = {}) => {
	const { uuid: Authorization } = new Cookies().getAll();
	console.log('Authorization', Authorization);
	const { method, data } = body;
	const requestOptions = {
		method,
		headers: {
			'Content-Type': 'application/json',
			Authorization,
		},
		body: data ? JSON.stringify(data) : undefined,
	};
	return fetch(`${API_URL}/${path}`, requestOptions);
};

export const requestParamJson = (path, param, body) => requestJson(`${path}/${param}`, body);

export const createBody = (data, method) => ({ data, method });
