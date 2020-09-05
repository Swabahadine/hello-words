export const SEPARATOR = '\n\n ';

export const filterDataByLevel = (level) => {
	switch (level) {
	case 1:
		return (({ weight }) => weight > 20 && weight < 23);
	default:
		return (({ weight }) => weight > 2 && weight < 5);
	}
};

export const unsedTags = ['CC', 'DT', 'FW', 'N', 'NNP'];

const isIncludeTag = (tag, includeTagsList) => !includeTagsList || includeTagsList.includes(tag);

export const parseData = (obj, includeTags) => {
	const res = [];
	Object.keys(obj).forEach((key) => {
		if (!unsedTags.includes(key) && isIncludeTag(key, includeTags)) {
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
