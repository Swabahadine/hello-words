export const SEPARATOR = '.\n ';

export const filterDataByLevel = (level) => {
	switch (level) {
	case 1:
		return (({ weight }) => weight > 20 && weight < 23);
	default:
		return (({ weight }) => weight > 2 && weight < 5);
	}
};

export const unsedTags = ['CC', 'DT', 'FW', 'N', 'NNP'];

export const parseData = (obj) => {
	const res = [];
	Object.keys(obj).forEach((key) => {
		if (!unsedTags.includes(key)) {
			const tagObj = obj[key];
			const resTag = Object.keys(tagObj).map((word) => ({
				name: word,
				weight: tagObj[word],
				tag: key,
			}));
			res.push(...resTag);
		}
	});
	return res;
};
