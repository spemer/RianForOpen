// @flow
import React, { Component } from 'react';
import FroalaEditor from 'react-froala-wysiwyg';
// import 'FroalaEditor/froala_editor_sources_2.6.2/js/froala_editor.pkgd.js';
import 'froala-editor/js/froala_editor.min';
import 'froala-editor/js/plugins/image.min';
import 'froala-editor/js/plugins/quote.min';
import 'froala-editor/js/plugins/align.min';
import 'froala-editor/js/plugins/paragraph_format.min';
import 'froala-editor/js/plugins/code_view.min';
import 'froala-editor/js/plugins/lists.min';
import 'froala-editor/css/plugins/code_view.min.css';
import parentCss from '../rianModalEditor.css';
import editorConfig from './editorConfig';
import '../../fontawesome.global.css';
import './rianlist.global.css';
import './editor.global.css';

type DefaultProps = {
};

type Props = {
};

type State = {
    content: string,
};

class MainEditor extends Component<DefaultProps, Props, State> {
	static defaultProps = {}

	constructor(props: Props) {
		super(props);
		this.handleModelChange = this.handleModelChange.bind(this);
		this.handleController = this.handleController.bind(this);
	}

	state = {
		content: '',
	}

	componentDidMount() {
		this.initControls.initialize();
		$.FroalaEditor.RegisterShortcut(49, 'paragraphFormat', 'H1', 'H', false);
		$.FroalaEditor.RegisterShortcut(50, 'paragraphFormat', 'H2', 'H', false);
		$.FroalaEditor.RegisterShortcut(51, 'paragraphFormat', 'H3', 'H', false);
		const isActive = function (cmd) {
			const blocks = this.selection.blocks();

			if (blocks.length) {
				const blk = blocks[0];
				var tag = 'N';
				const default_tag = this.html.defaultTag();
				if (blk.tagName.toLowerCase() != default_tag && blk != this.el) {
					tag = blk.tagName;
				}
			}

			if (['LI', 'TD', 'TH'].indexOf(tag) >= 0) {
				tag = 'N';
			}

			return tag.toLowerCase() == cmd;
		};

		// Define custom buttons.//////
		$.FroalaEditor.DefineIcon('normal', { NAME: '<strong>H0</strong>', template: 'text' });
		$.FroalaEditor.DefineIcon('h1', { NAME: '<strong>H1</strong>', template: 'text' });
		$.FroalaEditor.DefineIcon('h2', { NAME: '<strong>H2</strong>', template: 'text' });
		$.FroalaEditor.DefineIcon('h3', { NAME: '<strong>H3</strong>', template: 'text' });
		$.FroalaEditor.DefineIcon('pre', { NAME: '<strong>CO</strong>', template: 'text' });
		$.FroalaEditor.RegisterCommand('normal', {
			title: 'Normal',
			callback(cmd, val, params) {
				if (isActive.apply(this, [cmd])) {
					this.paragraphFormat.apply('N');
				} else {
					this.paragraphFormat.apply(cmd);
				}
			},
			refresh($btn) {
				$btn.toggleClass('fr-active', isActive.apply(this, [$btn.data('cmd')]));
			},
		});

		$.FroalaEditor.RegisterCommand('h1', {
			title: 'Heading 1',
			callback(cmd, val, params) {
				if (isActive.apply(this, [cmd])) {
					this.paragraphFormat.apply('N');
				} else {
					this.paragraphFormat.apply(cmd);
				}
			},
			refresh($btn) {
				$btn.toggleClass('fr-active', isActive.apply(this, [$btn.data('cmd')]));
			},
		});

		$.FroalaEditor.RegisterCommand('h2', {
			title: 'Heading 2',
			callback(cmd, val, params) {
				if (isActive.apply(this, [cmd])) {
					this.paragraphFormat.apply('N');
				} else {
					this.paragraphFormat.apply(cmd);
				}
			},
			refresh($btn) {
				$btn.toggleClass('fr-active', isActive.apply(this, [$btn.data('cmd')]));
			},
		});

		$.FroalaEditor.RegisterCommand('h3', {
			title: 'Heading 3',
			callback(cmd, val, params) {
				if (isActive.apply(this, [cmd])) {
					this.paragraphFormat.apply('N');
				} else {
					this.paragraphFormat.apply(cmd);
				}
			},
			refresh($btn) {
				$btn.toggleClass('fr-active', isActive.apply(this, [$btn.data('cmd')]));
			},
		});
		$.FroalaEditor.RegisterCommand('pre', {
			title: 'CODE',
			callback(cmd, val, params) {
				if (isActive.apply(this, [cmd])) {
					this.paragraphFormat.apply('N');
				} else {
					this.paragraphFormat.apply(cmd);
				}
			},
			refresh($btn) {
				$btn.toggleClass('fr-active', isActive.apply(this, [$btn.data('cmd')]));
			},
		});
		// when user scroll, it will hide inline toolbar
		$(`.${parentCss.container}`).scroll(() => {
			$('.fr-toolbar.fr-desktop.fr-inline').css('display', 'none');
		});
	}

	handleModelChange: Function;
	handleController: Function;
	initControls: any;

	handleModelChange(model: string) {
		this.setState(() => ({ content: model }));
	}

	handleController(initControls: any) {
		this.initControls = initControls;
	}


	render() {
		const config = editorConfig;
		return (
			<div className={parentCss.mainEditor}>
				<FroalaEditor
					tag="div"
					model={this.state.content}
					config={config}
					onModelChange={this.handleModelChange}
					onManualControllerReady={this.handleController}
				/>
			</div>
		);
	}
}

export default MainEditor;
