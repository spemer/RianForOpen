const DOCKER_ENV = process.env.IS_DOCKER ? 'mongodb' : 'localhost';
const DB = process.env.IS_MOCK_DB ? 'test-for-rian' : 'rian';

const mongoConfig = {
	mongoURL: `mongodb://${DOCKER_ENV}:27017/${DB}`, // mongodb for docker
};

export default mongoConfig;
