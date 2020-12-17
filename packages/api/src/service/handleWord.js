const natural = require('natural');
const axios = require('axios');
const { parse } = require('node-html-parser');

const language = 'EN';
const defaultCategory = 'N';
const defaultCategoryCapitalized = 'NNP';

const lexicon = new natural.Lexicon(language, defaultCategory, defaultCategoryCapitalized);
const ruleSet = new natural.RuleSet('EN');
const tagger = new natural.BrillPOSTagger(lexicon, ruleSet);

const tokenizer = new natural.OrthographyTokenizer({ langage: 'en' });

const posTaggerObj = (dataArray) => {
	const data = dataArray.filter((w) => w.length > 1);
	const res = {};
	const words = tagger.tag(data).taggedWords;
	let diffWords = 0;
	let diffTags = 0;
	words.forEach(({ token, tag }) => {
		const tokLowCase = token.toLowerCase();
		if (res[tag] === undefined) {
			res[tag] = { [tokLowCase]: { weight: 1 } };
			diffTags += 1;
		} else if (res[tag][tokLowCase] === undefined) {
			res[tag][tokLowCase] = { weight: 1 };
			diffWords += 1;
		} else {
			res[tag][tokLowCase].weight += 1;
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

	return resPosTaggerObj;
};

exports.parseForModelWord = (obj, category) => {
	const res = [];
	Object.keys(obj).forEach((tag) => {
		Object.keys(obj[tag]).forEach((wordObj) => {
			res.push({
				value: wordObj,
				posTag: tag,
				weight: obj[tag][wordObj].weight,
				category,
			});
		});
	});
	return res;
};
