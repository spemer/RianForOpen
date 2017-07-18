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
import parentCss from '../rianModalEditor.css';
import editorConfig from './editorConfig';
import '../../fontawesome.global.css';
import './rianModal.global.css';
import './editor.global.css';

type DefaultProps = {};

type Props = {};

type State = {
  content: string
};

class MainEditor extends Component<DefaultProps, Props, State> {
	static defaultProps = {};

	constructor(props: Props) {
		super(props);
		this.handleModelChange = this.handleModelChange.bind(this);
		this.handleController = this.handleController.bind(this);
	}

	state = {
		content: '',
	};

	componentDidMount() {
		this.initControls.initialize();
		$.FroalaEditor.RegisterShortcut(49, 'paragraphFormat', 'H1', 'H', false);
		$.FroalaEditor.RegisterShortcut(50, 'paragraphFormat', 'H2', 'H', false);
		$.FroalaEditor.RegisterShortcut(51, 'paragraphFormat', 'H3', 'H', false);
		function isActive(cmd) {
			const blocks = this.selection.blocks();
			let tag;
			if (blocks.length) {
				const blk = blocks[0];
				tag = 'N';
				const defaultTag = this.html.defaultTag();
				if (blk.tagName.toLowerCase() != defaultTag && blk != this.el) {
					tag = blk.tagName;
				}
			}

			if (['LI', 'TD', 'TH'].indexOf(tag) >= 0) {
				tag = 'N';
			}
			if (tag && tag.toLowerCase) {
				return tag.toLowerCase() == cmd;
			}
			return null;
		}


    // Define custom buttons.//////
		$.FroalaEditor.DefineIcon('normal', {
			NAME: '<strong>H0</strong>',
			template: 'text',
		});
		$.FroalaEditor.DefineIcon('h1', {
			NAME: '<strong>H1</strong>',
			template: 'text',
		});
		$.FroalaEditor.DefineIcon('h2', {
			NAME: '<strong>H2</strong>',
			template: 'text',
		});
		$.FroalaEditor.DefineIcon('h3', {
			NAME: '<strong>H3</strong>',
			template: 'text',
		});
		$.FroalaEditor.DefineIcon('pre', {
			NAME: '<strong>CO</strong>',
			template: 'text',
		});
		$.FroalaEditor.RegisterCommand('normal', {
			title: 'Normal',
			callback(cmd) {
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
			callback(cmd) {
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
			callback(cmd) {
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
			callback(cmd) {
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
			callback(cmd) {
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
		$(`.${parentCss.overlay}`).scroll(() => {
			$('.fr-toolbar.fr-desktop.fr-inline').css('display', 'none');
		});

		$('.fr-box').css({
			position: 'relative',
			'max-width': '540px',
			'min-width': '540px',
			'min-height': '700px',
			'font-family': 'NotoSansCJKkr-Regular',
			height: '100%',
			'font-size': '15px',
			'font-weight': '300',
			'line-height': '1.62',
			'letter-spacing': '-0.4px',
			color: '#515861',
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
