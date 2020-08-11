const {
	application,
	log,
} = require('express-server-app');
const handleWordService = require('./service/handleWord');

const urls = [
	'https://medium.com/@patarkf/synchronize-your-asynchronous-code-using-javascripts-async-await-5f3fa5b1366d',
	'https://www.deepl.com/en/docs-api/',
	'https://medium.com/@me_37286/19-ways-to-become-a-better-node-js-developer-in-2019-ffd3a8fbfe38',
	'https://medium.com/the-node-js-collection/why-the-hell-would-you-use-node-js-4b053b94ab8e',
	'https://medium.com/@tkwebdev/vue-going-serverless-with-firebase-ad96398e43c8',
	'https://policy.medium.com/medium-privacy-policy-f03bf92035c9',
	'https://aws.amazon.com/terms/',
	'https://aws.amazon.com/terms/?nc1=f_pr',
	'https://seranking.com/blog/find-all-pages-on-a-website/',
];

handleWordService.fetchTextFromUrl(urls);

const api = require('./api');

log().debug('starting server.js');

const app = application()
	.useInitialMiddlewares({ forceHttps: false });

app.useRootRoute()
	.useHealthyRoute()
	.use('/', api)
	.useApiFinalMiddlewares();

module.exports = app;
