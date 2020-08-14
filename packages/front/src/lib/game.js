export const SEPARATOR = '.\n ';

export const filterDataByLevel = (level) => {
	switch (level) {
	case 1:
		return (({ weight }) => weight > 20 && weight < 23);
	default:
		return (({ weight }) => weight > 2 && weight < 5);
	}
};
