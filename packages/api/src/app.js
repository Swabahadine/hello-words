const {
	application,
	log,
} = require('express-server-app');
const handleWordService = require('./service/handleWord');

const url = 'https://alligator.io/react/whats-new-in-react-16.9/';

handleWordService.fetchTextFromUrl(url);

const api = require('./api');

log().debug('starting server.js');

const app = application()
	.useInitialMiddlewares({ forceHttps: false });

app.useRootRoute()
	.useHealthyRoute()
	.use('/', api)
	.useApiFinalMiddlewares();

module.exports = app;
