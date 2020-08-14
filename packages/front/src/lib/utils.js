export const randInt = (max) => Math.floor(Math.random() * Math.floor(max));

export const convertToSentence = (words, separator) => {
	let sentence = '';
	words.forEach((w) => {
		sentence += `${w}${separator}`;
	});
	return sentence;
};

export const convertToArray = (words, separator) => words.split(separator);

export const generateUniqueNum = (exceptNums, maxNum) => {
	const current = randInt(maxNum);
	if (exceptNums.includes(current)) return generateUniqueNum(exceptNums, maxNum);
	return current;
};

export const generateMultiUniqueNum = (number, maxNum) => {
	const uniqueNums = [];
	for (let i = 0; i < number; i += 1) {
		const num = generateUniqueNum(uniqueNums, maxNum);
		uniqueNums.push(num);
	}
	return uniqueNums;
};

export const shuffleArray = (array) => {
	for (let i = array.length - 1; i > 0; i -= 1) {
		const j = Math.floor(Math.random() * (i + 1));
		[array[i], array[j]] = [array[j], array[i]];
	}
};
