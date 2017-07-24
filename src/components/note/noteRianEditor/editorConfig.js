// const moment = require('moment');
// const crypto = require('crypto');

const toolbarButton = [
	'paragraphFormat',
	'underline',
	'bold',
	'strikeThrough',
	'italic',
	'formatOL',
	'formatUL',
	'align',
	'quote',
	'insertHR',
	'insertImage',
	'insertLink',
	'html',
]; //

// const s3Config = {
// 	bucket: 'elasticbeanstalk-us-east-2-515925319740',
// 	region: 's3',
// 	acl: 'public-read',
// 	keyStart: 'uploads/',
// 	params: {
// 		acl: 'public-read',
// 		AWSAccessKeyId: 'AKIAIAYA55I2O72V4Y5Q',
// 	},
// };

// s3Config.params.policy = {
// 	expiration: moment().add(1, 'days').toISOString(),
// 	conditions: [
// 	{ bucket: s3Config.bucket },
// 	{ acl: s3Config.params.acl },
// 	{ success_action_status: '201' },
// 	{ 'x-requested-with': 'xhr' },
// 	['starts-with', '$key', s3Config.keyStart],
// 	['starts-with', '$Content-Type', ''],
// 	],
// };
// s3Config.params.policy = new Buffer(JSON.stringify(s3Config.params.policy)).toString('base64');

// const hash = crypto.createHmac('sha1', 'AKIAIAYA55I2O72V4Y5Q');
// s3Config.params.signature = new Buffer(hash.update(s3Config.params.policy)
// 	.digest())
// 	.toString('base64');

const config = {
	spellcheck: false,
	placeholderText: '',
	editorClass: 'editorContainer',
	width: '100%',
	charCounterCount: false,
	tabSpaces: 8,
	language: 'ko',
	toolbarInline: true,
	videoInsertButtons: ['videoBack', 'videoByURL'],
	linkList: [],
	pluginsEnabled: [
		'lists',
		'image',
		'paragraphFormat',
		'quote',
		'align',
		'lineBreaker',
		'link',
		'codeView',
		'file',
	],
	shortcutsEnabled: ['paragraphFormat', 'undo', 'redo'],
	pastePlain: true,
	imageDefaultWidth: 400,
	imageResize: true,
	imageEditButtons: [],
	toolbarVisibleWithoutSelection: false,
	colorsDefaultTab: 'background',
	colorsBackground: ['#FFFAA5', '#9BDBFF', '#FF3466', 'REMOVE'],
	colorsText: ['#FFFAA5', '#9BDBFF', '#FF3466', 'REMOVE'],
	toolbarButtonsMD: toolbarButton,
	toolbarButtonsSM: toolbarButton,
	toolbarButtonsXS: toolbarButton,
	toolbarButtons: toolbarButton,
	paragraphFormat: {
		N: 'Normal',
		PRE: 'Code',
		H3: 'H3',
		H2: 'H2',
		H1: 'H1',
	},
  // imageUploadToS3: s3Config,
};

export default config;
