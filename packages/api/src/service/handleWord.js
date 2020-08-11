const natural = require('natural');
const axios = require('axios');
const { parse } = require('node-html-parser');

const tokenizer = new natural.OrthographyTokenizer({ langage: 'en' });

module.exports.fetchTextFromUrl = async (url) => {
	const config = {
		method: 'get',
		url,
		headers: { },
	};

	const response = await axios(config);
	const data = {};
	const html = JSON.stringify(response.data);
	const root = parse(html);
	const rootTok = tokenizer.tokenize(root.rawText);
	// natural.PorterStemmer.attach();
	// const rootTok = root.rawText.tokenizeAndStem();
	rootTok.forEach((w) => {
		const word = w.toLowerCase();
		//const word = natural.PorterStemmer.stem(w);
		data[word] = data[word] ? data[word] + 1 : 1;
	});
	console.log(Object.keys(data).sort((a, b) => data[b] - data[a]).map((w) => ({ [w]: data[w] })));
};
