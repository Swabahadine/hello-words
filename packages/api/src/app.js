const {
	application,
	log,
} = require('express-server-app');

const axios = require('axios');

const config = {
	method: 'get',
	url: 'https://fr.reactjs.org/',
	headers: { },
};

axios(config)
	.then((response) => {
		console.log(JSON.stringify(response.data));
	})
	.catch((error) => {
		console.log(error);
	});

const api = require('./api');

log().debug('starting server.js');

const app = application()
	.useInitialMiddlewares({ forceHttps: false });

app.useRootRoute()
	.useHealthyRoute()
	.use('/', api)
	.useApiFinalMiddlewares();

module.exports = app;
