const express = require('express');
const { validator, wrapAsync: wa } = require('express-server-app');
const translate = require('@vitalets/google-translate-api');

const router = express.Router();

router.post('/',
	validator().validate({
		body: {
			type: 'object',
			additionalProperties: false,
			properties: {
				text: { type: 'string' },
			},
			required: ['text'],

		},
	}),
	wa(async (req, res) => {
		const { text } = req.body;
		const resp = await translate(text, { from: 'en', to: 'fr' });
		res.json(resp);
	}));

module.exports = router;
