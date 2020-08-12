/* eslint-disable import/prefer-default-export */
import { requestParamJson } from './lib';

const PATH = 'groups';

export const wordByCategory = (category) => async () => {
	const result = await requestParamJson(PATH, category);
	return result.json();
};
