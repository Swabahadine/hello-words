const express = require('express');
const { validator, wrapAsync: wa } = require('express-server-app');
const { notFound } = require('@hapi/boom');

const handleWordService = require('../service/handleWord');
const GroupServices = require('../service/Group');
const SourceServices = require('../service/Source');

// const defaultUrls = [
// 	'https://medium.com/@patarkf/synchronize-your-asynchronous-code-using-javascripts-async-await-5f3fa5b1366d',
// 	'https://www.deepl.com/en/docs-api/',
// 	'https://medium.com/@me_37286/19-ways-to-become-a-better-node-js-developer-in-2019-ffd3a8fbfe38',
// 	'https://medium.com/the-node-js-collection/why-the-hell-would-you-use-node-js-4b053b94ab8e',
// 	'https://medium.com/@tkwebdev/vue-going-serverless-with-firebase-ad96398e43c8',
// 	'https://policy.medium.com/medium-privacy-policy-f03bf92035c9',
// 	'https://aws.amazon.com/terms/',
// 	'https://aws.amazon.com/terms/?nc1=f_pr',
// 	'https://seranking.com/blog/find-all-pages-on-a-website/',
// ];

const router = express.Router();

router.get('/categories',
	wa(async (req, res) => {
		const categories = await SourceServices.findAll();
		res.json(categories);
	}));

router.get('/:id',
	wa(async (req, res) => {
		const { id } = req.params;
		const source = await SourceServices.findById(id);
		res.json(source);
	}));

router.post('/',
	validator().validate({
		body: {
			type: 'object',
			additionalProperties: false,
			properties: {
				category: { type: 'string' },
				urls: { type: 'array', items: { type: 'string' } },
			},
			required: ['category', 'urls'],

		},
	}),
	wa(async (req, res) => {
		const { category, urls } = req.body;
		const { results, infoGroup } = await handleWordService.fetchTextFromUrl(urls, category);
		const resp = await GroupServices.create(category, results);
		await SourceServices.create(req.body, resp._id, infoGroup);
		res.json(resp);
	}));

router.put('/',
	validator().validate({
		body: {
			type: 'object',
			additionalProperties: false,
			properties: {
				id: { type: 'string' },
				category: { type: 'string' },
				urls: { type: 'array', items: { type: 'string' } },
			},
			required: ['category', 'urls'],

		},
	}),
	wa(async (req, res) => {
		const { category, urls, id } = req.body;
		const sources = await SourceServices.findById(id);
		if (!sources) throw notFound(`Cette catégorie: ${id} n'a pas été trouvée`);

		const group = GroupServices.findById(sources.group);
		if (!group) throw notFound(`Ce group: ${sources.group} n'a pas été trouvée`);

		const { results, infoGroup } = await handleWordService.fetchTextFromUrl(urls, category);

		const resp = await GroupServices.update(sources.group, category, results);
		await SourceServices.update(id, req.body, infoGroup);
		res.json(resp);
	}));

module.exports = router;
