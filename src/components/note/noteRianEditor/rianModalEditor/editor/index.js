// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// froala
// import 'FroalaEditor/froala_editor_sources_2.6.2/js/froala_editor.pkgd.js';
import FroalaEditor from 'react-froala-wysiwyg';
import 'froala-editor/js/froala_editor.min';
import 'froala-editor/js/plugins/image.min';
import 'froala-editor/js/plugins/quote.min';
import 'froala-editor/js/plugins/align.min';
import 'froala-editor/js/plugins/file.min';
import 'froala-editor/js/plugins/paragraph_format.min';
import 'froala-editor/js/plugins/code_view.min';
import 'froala-editor/js/plugins/lists.min';
import editorConfig from './editorConfig';
// css
import parentCss from '../rianModalEditor.css';
import sideHeadCss from './style/sidehead.css';
import editorHeadCss from './style/editorHead.css';
import './style/rianModal.global.css';
import './style/editor.global.css';
import './style/reactTag.global.css';
import '../../fontawesome.global.css';

type DefaultProps = {
	data: null,
	loading: null,
	title: null,
	changeModalState: Function,
};

type Props = {
	data: ?string,
	loading: ?boolean,
	title: ?string,
	changeModalState: Function,
};

type tagType = {
	id: number,
	text: string
};


type State = {
	titleValue: ?string,
	tags: Array<tagType>,
	content: ?string
};

class EditorBox extends Component<DefaultProps, Props, State> {
	static defaultProps = {
		data: null,
		loading: null,
		title: null,
		changeModalState: () => {},
	};


	constructor(props: Props) {
		super(props);
		this.handleModelChange = this.handleModelChange.bind(this);
		this.handleController = this.handleController.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.handleDelete = this.handleDelete.bind(this);
		this.handleAddition = this.handleAddition.bind(this);
	}

	state = {
		tags: [{ id: 1, text: '#명상' }, { id: 2, text: '#자기계발' }],
		titleValue: this.props.title && !this.props.loading ? this.props.title : '로딩중',
		content: this.props.data && !this.props.loading ? this.props.data : '<h1>"로딩중"</h1>',
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

	componentWillReceiveProps(nextProps: Props) {
		console.log('editor get new Props', nextProps);
		if (process.env.NODE_ENV === 'production') {
			const { loading, data, title } = nextProps;
			if (this.props.loading && !loading) {
				this.setState({
					content: data,
					titleValue: title,
				});
			}
		}
	}

	handleModelChange: Function;
	handleController: Function;
	handleChange: Function;
	handleDelete: Function;
	handleAddition: Function;
	initControls: any;

	handleModelChange(model: string) {
		this.setState(() => ({ content: model }));
	}

	handleController(initControls: any) {
		this.initControls = initControls;
	}

	handleChange({ target: { value } }: any) {
		this.setState({
			titleValue: value,
		});
	}

	handleDelete(i: number) {
		const tags = this.state.tags;
		tags.splice(i, 1);
		this.setState({ tags });
	}

	handleAddition(tag: string) {
		const tags = this.state.tags;
		tags.push({
			id: tags.length + 1,
			text: `#${tag.replace(/ /gi, '')}`,
		});
		this.setState({ tags });
	}

	render() {
		const { changeModalState } = this.props;
		const config = editorConfig;
		return (
			<div className={parentCss.editorBox}>
				<div className={parentCss.sideHead}>
					<Link to={'/card/main'} >
						<svg
							version="1.1"
							width="20px"
							height="20px"
							opacity="0.38"
							viewBox="0 0 24 24"
							enableBackground="new 0 0 24 24"
							className={sideHeadCss.close}
							onClick={() => {
								changeModalState(false);
							}}
						>
							<path d="M16.5,8.4l-0.9-0.9L12,11.1L8.4,7.5L7.5,8.4l3.6,3.6l-3.6,3.6l0.9,0.9l3.6-3.6l3.6,3.6l0.9-0.9L12.9,12L16.5,8.4z" />
						</svg>
					</Link>
					<div className={sideHeadCss.save}><p className={sideHeadCss.name}>저장</p></div>
					<svg
						viewBox="0 0 24 24"
						opacity="0.38"
						width="13px"
						height="20px"
						className={sideHeadCss.trash}
					>
						<path
							fill="none"
							stroke="#000"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeMiterlimit="10"
							strokeWidth="1.5"
							d="M4.4 20.8c0 1.2 1 2.2 2.2 2.2h10.8c1.2 0 2.2-1 2.2-2.2V7.6H4.4v13.2zM19.6 2.1h-3.8L14.7 1H9.3L8.2 2.1H4.4v3.3h15.2zM12 10.4v9.9M15.3 10.4v9.9M8.7 10.4v9.9"
						/>
					</svg>
				</div>
				<div className={parentCss.editorHead}>
					<div className={editorHeadCss.container}>
						<div className={editorHeadCss.tagBox} style={{ height: '40px', marginTop: '0px' }}>
							<div className={editorHeadCss.gutter}>
								{/* <p className={css.gutterName}>#</p> */}
							</div>
							<div className={editorHeadCss.tagContainer} />
						</div>
						<div className={editorHeadCss.titleHead}>
							<div className={editorHeadCss.gutter}>
								<p className={editorHeadCss.gutterName}>Title</p>
							</div>
							<input className={editorHeadCss.title} placeholder="" value={this.state.titleValue} onChange={this.handleChange} />
						</div>
						<div className={editorHeadCss.borderBox}>
							<div className={editorHeadCss.borderLine} />
						</div>
					</div>
				</div>
				<div className={parentCss.mainEditor}>
					<FroalaEditor
						tag="div"
						model={this.state.content}
						config={config}
						onModelChange={this.handleModelChange}
						onManualControllerReady={this.handleController}
					/>
				</div>
			</div>
		);
	}
}

export default EditorBox;
