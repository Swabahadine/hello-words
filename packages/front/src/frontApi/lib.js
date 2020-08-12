import { API_URL } from '../configure';

export const requestJson = (path, body = {}) => {
	const { method, data } = body;
	const requestOptions = {
		method,
		headers: { 'Content-Type': 'application/json' },
		body: data ? JSON.stringify(data) : undefined,
	};
	return fetch(`${API_URL}/${path}`, requestOptions);
};

export const requestParamJson = (path, param, body) => requestJson(`${path}/${param}`, body);
