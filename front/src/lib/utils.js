const noAccent = (str) => {
	const accent = [
		/[\300-\306]/g, /[\340-\346]/g, // A, a
		/[\310-\313]/g, /[\350-\353]/g, // E, e
		/[\314-\317]/g, /[\354-\357]/g, // I, i
		/[\322-\330]/g, /[\362-\370]/g, // O, o
		/[\331-\334]/g, /[\371-\374]/g, // U, u
		/[\321]/g, /[\361]/g, // N, n
		/[\307]/g, /[\347]/g, // C, c
	];
	const noaccent = ['A', 'a', 'E', 'e', 'I', 'i', 'O', 'o', 'U', 'u', 'N', 'n', 'C', 'c'];
	for (let i = 0; i < accent.length; i += 1) {
		str = str.replace(accent[i], noaccent[i]);
	}
	return str;
};

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

export const approximativeWords = (wo1 = '', wo2 = '') => {
	const w1 = wo1.split('');
	const w2Arr = wo2.split(' ');
	const w2 = noAccent(w2Arr[w2Arr.length - 1]);
	let res = true;
	w1.forEach((c, i) => {
		const b = `${w1[i]}` === `${w2[i]}`;
		if (i < 2) {
			res = res && b;
		}
	});
	return res;
};
