// @flow
import React, { Component } from 'react';
import 'FroalaEditor/froala_editor_sources_2.6.2/js/froala_editor.pkgd.js';
import FroalaEditor from 'react-froala-wysiwyg';
import editorConfig from './editorConfig';
import parentCss from '../rianListEditor.css';
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
