const natural = require('natural');
const axios = require('axios');
const { parse } = require('node-html-parser');

const GroupServices = require('./Group');

// const wordnet = new natural.WordNet();

// const wordInterpret = (word) => new Promise((resolve) => {
// 	wordnet.lookup(word, (results) => {
// 		const firstResult = results[0];
// 		const res = firstResult ? firstResult.lemma : word;
// 		resolve(res);
// 	});
// });

const tokenizer = new natural.OrthographyTokenizer({ langage: 'en' });

module.exports.fetchTextFromUrl = async (urls, category) => {
	const data = {};
	let rootTok = [];
	await Promise.all(urls.map(async (url) => {
		const config = {
			method: 'get',
			url,
			headers: { },
		};
		const response = await axios(config);
		const html = JSON.stringify(response.data);
		const root = parse(html);
		rootTok = [...rootTok, ...tokenizer.tokenize(root.rawText)];
	}));
	//const x = 100 / rootTok.length;
	const pr = 1; //parseFloat(x);
	// natural.PorterStemmer.attach();
	// const rootTok = root.rawText.tokenizeAndStem();
	await Promise.all(rootTok.map(async (w) => {
		const word = w.toLowerCase();
		data[word] = data[word] ? data[word] + pr : pr;
	}));
	const resData = {};
	const results = Object.keys(data)
		.sort((a, b) => data[b] - data[a])
		.map((w) => {
			resData[w] = data[w];
			return { name: w, weight: data[w] };
		});
	return GroupServices.create(category, results);
};
