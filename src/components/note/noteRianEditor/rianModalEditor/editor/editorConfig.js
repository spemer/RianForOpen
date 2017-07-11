const toolbarButton = [
	'normal',
	'h1',
	'h2',
	'h3',
	'pre',
	'underline',
	'quote',
	'formatOL',
	'formatUL',
	'align',
	'insertImage',
	'insertLink',
	'align',
	'paragraphFormat',
	'html',
];//

const config = {
	spellcheck: false,
	placeholderText: '',
	editorClass: 'editorContainer',
	width: '100%',
	charCounterCount: false,
	tabSpaces: 8,
	toolbarInline: true,
	pluginsEnabled: ['lists', 'image', 'paragraphFormat', 'quote', 'align', 'codeView'],
	shortcutsEnabled: ['paragraphFormat', 'undo', 'redo'],
	pastePlain: true,
	toolbarVisibleWithoutSelection: true,
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
};

export default config;
