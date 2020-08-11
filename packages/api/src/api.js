const { config } = require('express-server-app');
const express = require('express');

const groupRoute = require('./routes/group');

const api = express.Router();

api.use('/groups', groupRoute);

api.use((req, res, next) => {
	res.header('X-Robots-Tag', 'none');
	next();
});

api.use('/check', (req, res) => {
	res.json({
		APP_NAME: config.app.name,
		STAGE: config.app.stage,
	});
});

module.exports = api;
