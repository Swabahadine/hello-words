/* eslint-disable import/prefer-default-export */
import { requestParamJson, requestJson, createBody } from './lib';

const PATH = 'groups';

export const wordByCategory = (category) => async () => {
	const result = await requestParamJson(PATH, category);
	return result.json();
};

export const createCategory = (category, urls) => async () => {
	const data = { category, urls };
	const result = await requestJson(PATH, createBody(data, 'POST'));
	return result.json();
};
