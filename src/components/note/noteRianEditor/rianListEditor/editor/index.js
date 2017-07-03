// @flow
import React, { Component } from 'react';
import FroalaEditor from 'react-froala-wysiwyg';
import '../../froalaEditorSRC/js/froala_editor';
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
		// this.initControls.getEditor()('toolbar.hide');
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
