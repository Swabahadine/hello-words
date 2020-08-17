/* eslint-disable import/prefer-default-export */
import { requestParamJson, requestJson, createBody } from './lib';

const PATH = 'groups';

export const wordById = (id) => async () => {
	const result = await requestParamJson(PATH, id);
	return result.json();
};

export const createCategory = (data) => async () => {
	const result = await requestJson(PATH, createBody(data, 'POST'));
	return result.json();
};

export const findCategories = () => async () => {
	const result = await requestJson(`${PATH}/categories`);
	return result.json();
};
