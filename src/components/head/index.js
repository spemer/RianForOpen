// @flow
import React, { Component } from 'react';
import screenfull from 'screenfull';
import { connect } from 'react-redux';
import searchIcon from 'static/icons/ic-search.svg';
import SeachBox from './searchBox';
import { fullScreenChange } from '../../actions/AppActions';
import parentCss from '../app/app.css';
import css from './head.css';
import icFullScreenIcon from '../../../static/icons/ic_fullScreen.svg';

const mapToDispatch = dispatch => ({
	changeFullScreenApp(argu) {
		dispatch(fullScreenChange(argu));
	},
});

type DefaultProps = {
	changeFullScreenApp: Function,
};

type Props = {
	changeFullScreenApp: Function,
};

type State = {};

@connect(undefined, mapToDispatch)
class Head extends Component<DefaultProps, Props, State> {
	static defaultProps = {
		changeFullScreenApp: () => {},
	}

	constructor(props: Props) {
		super(props);
		this.screenfull = screenfull;
		this.fullScreen = this.fullScreen.bind(this);
	}

	state = {}

	componentDidMount() {
		this.screenfull.onchange(() => {
			if (this.screenfull.isFullscreen) {
				this.props.changeFullScreenApp(true);
			} else {
				this.props.changeFullScreenApp(false);
			}
		});
	}

	screefull: any;
	fullScreen: any;


	fullScreen() {
		if (this.screenfull.enabled) {
			this.screenfull.toggle();
		} else {
		// Ignore or do something else
		}
	}

	render() {
		return (
			<div className={parentCss.head}>
				<div className={css.container}>
					<img
						className={css.icon}
						src={icFullScreenIcon}
						onClick={this.fullScreen}
						alt="fullscreen"
					/>
					<div className={css.searchBox}>
						<img className={css.searchIc} src={searchIcon} alt="search" />
						<SeachBox />
					</div>
				</div>
			</div>
		);
	}

}

export default connect(undefined, mapToDispatch)(Head);
