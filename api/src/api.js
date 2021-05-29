const { config, log } = require('express-server-app');
const express = require('express');

const allRoutes = require('./routes');

const api = express.Router();
const logger = log();

const urls = Object.keys(allRoutes);
logger.info(`Liste des routes:${urls.map((url) => ` /${url}`)}`);
urls.forEach((url) => {
	api.use(`/${url}`, allRoutes[url]);
});

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
