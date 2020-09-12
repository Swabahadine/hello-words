import { Cookies } from 'react-cookie';
import { API_URL } from '../configure';

export const requestJson = (path, body = {}) => {
	const { uuid: Authorization } = new Cookies().getAll();
	const { method, data } = body;
	const requestOptions = {
		method,
		headers: {
			'Content-Type': 'application/json',
			Authorization,
		},
		body: data ? JSON.stringify(data) : undefined,
	};
	console.info(`req to -> ${API_URL}/${path}`, requestOptions);
	return fetch(`${API_URL}/${path}`, requestOptions);
};

export const requestParamJson = (path, param, body) => requestJson(`${path}/${param}`, body);

export const createBody = (data, method) => ({ data, method });
