

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

const config = {
	spellcheck: false,
	placeholderText: '',
	editorClass: 'editorContainer',
	width: '100%',
	charCounterCount: false,
	tabSpaces: 8,
	language: 'ko',
	toolbarInline: true,
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
	htmlAllowedTags: ['s', 'strong', 'u', 'em', 'p', 'h1', 'h2', 'h3', 'pre', 'li', 'ol', 'ul', 'blockquote', 'link', 'img'],
	shortcutsEnabled: ['paragraphFormat', 'undo', 'redo', 'formatOL', 'formatUL'],
	imageResize: true,
	imageInsertButtons: ['imageBack', '|', 'imageByURL'],
	imageEditButtons: [],
	toolbarVisibleWithoutSelection: false,
	colorsDefaultTab: 'background',
	colorsBackground: ['#FFFAA5', '#9BDBFF', '#FF3466', 'REMOVE'],
	colorsText: ['#FFFAA5', '#9BDBFF', '#FF3466', 'REMOVE'],
	toolbarButtonsMD: toolbarButton,
	toolbarButtonsSM: toolbarButton,
	toolbarButtonsXS: toolbarButton,
	toolbarButtons: toolbarButton,
	shortcutsHint: true,
	paragraphFormat: {
		N: 'Normal',
		PRE: 'Code',
		H3: 'H3',
		H2: 'H2',
		H1: 'H1',
	},
};

export default config;
