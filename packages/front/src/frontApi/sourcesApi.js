/* eslint-disable import/prefer-default-export */
import { requestParamJson, requestJson, createBody } from './lib';

const PATH = 'sources';

export const wordByCategory = (category) => async () => {
	const result = await requestParamJson(PATH, category);
	return result.json();
};

export const createCategory = (data) => async () => {
	const result = await requestJson(PATH, createBody(data, 'POST'));
	return result.json();
};

export const updateCategory = (data) => async () => {
	const result = await requestJson(PATH, createBody(data, 'PUT'));
	return result.json();
};

export const deleteCategory = async (data) => {
	const result = await requestJson(PATH, createBody(data, 'DELETE'));
	return result.json();
};

export const findCategoryById = (id) => async () => {
	const result = await requestParamJson(PATH, id);
	return result.json();
};

export const findCategories = () => async () => {
	const result = await requestJson(`${PATH}/categories`);
	return result.json();
};
