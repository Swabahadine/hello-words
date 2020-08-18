const natural = require('natural');
const axios = require('axios');
const { parse } = require('node-html-parser');

const language = 'EN';
const defaultCategory = 'N';
const defaultCategoryCapitalized = 'NNP';

const lexicon = new natural.Lexicon(language, defaultCategory, defaultCategoryCapitalized);
const ruleSet = new natural.RuleSet('EN');
const tagger = new natural.BrillPOSTagger(lexicon, ruleSet);
// const WordPOS = require('wordpos');

// const wordpos = new WordPOS();

// const wordnet = new natural.WordNet();

// const wordInterpret = (word) => new Promise((resolve) => {
// 	wordnet.lookup(word, (results) => {
// 		const firstResult = results[0];
// 		const res = firstResult ? firstResult.lemma : word;
// 		resolve(res);
// 	});
// });

const tokenizer = new natural.OrthographyTokenizer({ langage: 'en' });

const posTaggerObj = (data) => {
	const res = {};
	const words = tagger.tag(data).taggedWords;
	let diffWords = 0;
	let diffTags = 0;
	words.forEach(({ token, tag }) => {
		const tokLowCase = token.toLowerCase();
		if (res[tag] === undefined) {
			res[tag] = { [tokLowCase]: 1 };
			diffTags += 1;
		} else if (res[tag][tokLowCase] === undefined) {
			res[tag][tokLowCase] = 1;
			diffWords += 1;
		} else {
			res[tag][tokLowCase] += 1;
		}
	});
	return {
		results: res,
		infoGroup: {
			textSize: words.length,
			diffWords,
			diffTags,
		},
	};
};
module.exports.fetchTextFromUrl = async (urls) => {
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
	const resPosTaggerObj = posTaggerObj(rootTok);
	console.log(posTaggerObj(rootTok));
	console.log(Object.keys(posTaggerObj(rootTok)).length);
	// let resp;
	// await wordpos.getPOS(allText, (res) => {
	// 	resp = res;
	// });
	// console.log('resp', resp);
	//const x = 100 / rootTok.length;
	// const pr = 1; //parseFloat(x);
	// natural.PorterStemmer.attach();
	// const rootTok = root.rawText.tokenizeAndStem();
	// await Promise.all(rootTok.map(async (w) => {
	// 	const word = w.toLowerCase();
	// 	data[word] = data[word] ? data[word] + pr : pr;
	// }));
	// const resData = {};
	// const results = Object.keys(data)
	// 	.sort((a, b) => data[b] - data[a])
	// 	.map((w) => {
	// 		resData[w] = data[w];
	// 		return { name: w, weight: data[w] };
	// 	});
	// const infoGroup = {
	// 	textSize: rootTok.length,
	// 	diffWords: results.length,
	// };
	return resPosTaggerObj;
};
