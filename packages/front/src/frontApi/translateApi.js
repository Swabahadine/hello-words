/* eslint-disable import/prefer-default-export */
import { requestJson, createBody } from './lib';

const PATH = 'translates';

export const translateTofrench = async (text) => {
	const data = { text };
	const result = await requestJson(PATH, createBody(data, 'POST'));
	return result.json();
};
