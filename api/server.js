const mongoose = require('mongoose');
const { log } = require('express-server-app');

const logger = log();
const app = require('./src/app');

const user = process.env.MONGO_USER;
const password = process.env.MONGO_PASSWORD;
const host = process.env.MONGO_HOST;
const portDb = process.env.MONGO_PORT;
const database = process.env.MONGO_DATABASE;
const isSrv = process.env.MONGO_SRV;

const userMongoId = (user && password) ? `${user}:${password}@` : '';
const MGHOST = isSrv
	? `mongodb+srv://${user}:${password}@${host}/${database}`
	: `mongodb://${userMongoId}${host}:${portDb}/${database}`;
logger.info('mongoose connection ...');

mongoose.connect(MGHOST, {
	bufferCommands: false,
	bufferMaxEntries: 0,
	useCreateIndex: true,
	useUnifiedTopology: true,
	useNewUrlParser: true,
})
	.then(() => {
		logger.info(`mongoose connected on ${MGHOST}`);
		app.start('9003');
	})
	.catch((error) => {
		logger.error(`mongoose connection on ${MGHOST} error: ${error}`);
	});
