const DOCKER_ENV = process.env.IS_DOCKER ? 'mongodb' : 'localhost';
const mongoConfig = {
	mongoURL: `mongodb://${DOCKER_ENV}:27017/rian`, // mongodb for docker
};

export default mongoConfig;
