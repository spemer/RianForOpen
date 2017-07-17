const DOCKER_ENV = process.env.IS_DOCKER ? 'mongodb' : 'localhost';
const DB = process.env.IS_MOCK_DB ? 'test-for-rian' : 'rian';
let mongoConfig;
if (process.env.MLAB) {
	mongoConfig = {
		mongoURL: `mongodb://${DOCKER_ENV}:27017/${DB}`, // mongodb for docker
	};
} else {
	mongoConfig = {
		mongoURL: 'mongodb://wuyialex:rockofrian1@ds161742.mlab.com:61742/riandevelop', // mongodb for mlab
	};
}
console.log('mongoConfig', mongoConfig);
export default mongoConfig;
