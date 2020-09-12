const express = require('express');
const { validator, wrapAsync: wa } = require('express-server-app');
const { notFound } = require('@hapi/boom');

const handleWordService = require('../service/handleWord');
const GroupServices = require('../service/Group');
const SourceServices = require('../service/Source');
const CatServices = require('../service/Category');
const { withToken } = require('../session/withToken');

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
router.delete('/',
	withToken,
	validator().validate({
		body: {
			type: 'object',
			additionalProperties: false,
			properties: {
				id: { type: 'string' },
			},
			required: ['id'],

		},
	}),
	wa(async (req, res) => {
		const { id } = req.body;
		const uuid = req.session.token;

		const cat = await CatServices.findByIdOwner(id, uuid);
		if (!cat) throw notFound(`Cette catégorie: ${id} n'a pas été trouvée`);

		const sources = await SourceServices.findById(cat.sources);
		if (!sources) throw notFound(`Cette catégorie: ${cat.sources} n'a pas été trouvée`);

		const group = GroupServices.findById(cat.group);
		if (!group) throw notFound(`Ce group: ${cat.group} n'a pas été trouvée`);

		await CatServices.delete(id);
		await SourceServices.delete(cat.sources);
		const resp = await GroupServices.delete(cat.group);
		res.json(resp);
	}));

router.get('/categories',
	withToken,
	wa(async (req, res) => {
		const uuid = req.session.token;
		const categories = await CatServices.findAll({ owner: uuid });
		res.json(categories);
	}));

router.get('/sources/:id',
	withToken,
	wa(async (req, res) => {
		const { id } = req.params;
		const uuid = req.session.token;

		const cat = await CatServices.findByIdOwner(id, uuid);
		if (!cat) throw notFound(`Cette catégorie: ${id} n'a pas été trouvée`);

		const source = await SourceServices.findById(cat.sources);
		res.json(source);
	}));

router.get('/words/:id',
	withToken,
	wa(async (req, res) => {
		const { id } = req.params;
		const uuid = req.session.token;

		const cat = await CatServices.findByIdOwner(id, uuid);
		if (!cat) throw notFound(`Cette catégorie: ${id} n'a pas été trouvée`);

		const groupWords = await GroupServices.findById(cat.group);
		res.json(groupWords);
	}));

router.post('/',
	withToken,
	(req, res, next) => {
		next();
	},
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
		const uuid = req.session.token;
		const { category, urls } = req.body;
		const { results, infoGroup } = await handleWordService.fetchTextFromUrl(urls, category);
		const dataGroup = { category, size: results.length, words: results };
		const resp = await GroupServices.create(dataGroup);
		const dataSource = { ...req.body, group: resp._id, infos: infoGroup };
		const sources = await SourceServices.create(dataSource);
		await CatServices.create({
			owner: uuid,
			category,
			sources: sources._id,
			group: resp._id,
			infos: infoGroup,
		});
		res.json(resp);
	}));

router.put('/',
	withToken,
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
		const uuid = req.session.token;
		const { category, urls, id } = req.body;

		const cat = await CatServices.findByIdOwner(id, uuid);
		if (!cat) throw notFound(`Cette catégorie: ${id} n'a pas été trouvée`);

		const sources = await SourceServices.findById(cat.sources);
		if (!sources) throw notFound(`Cette source: ${cat.sources} n'a pas été trouvée`);

		const group = GroupServices.findById(cat.group);
		if (!group) throw notFound(`Ce group: ${sources.group} n'a pas été trouvée`);

		const { results, infoGroup } = await handleWordService.fetchTextFromUrl(urls, category);
		const groupProp = {
			category,
			size: results.length,
			words: results,
		};
		const sourcesProps = {
			...req.body,
			infos: infoGroup,
		};

		const catProps = {
			category,
			infos: infoGroup,
		};
		const resp = await GroupServices.update(cat.group, groupProp);
		await SourceServices.update(cat.sources, sourcesProps);
		await CatServices.update(id, catProps);
		res.json(resp);
	}));

module.exports = router;
