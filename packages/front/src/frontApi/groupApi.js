/* eslint-disable import/prefer-default-export */
import { requestParamJson, requestJson, createBody } from './lib';

const PATH = 'groups';

export const wordByCategory = (category) => async () => {
	const result = await requestParamJson(PATH, category);
	return result.json();
};

export const createCategory = (data) => async () => {
	console.log('data', data);
	const result = await requestJson(PATH, createBody(data, 'POST'));
	return result.json();
};

export const findCategories = () => async () => {
	const result = await requestJson(`${PATH}/categories`);
	return result.json();
};
