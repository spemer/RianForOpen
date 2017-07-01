// @ flow
import React from 'react';
import screenfull from 'screenfull';
import { connect } from 'react-redux';
import { fullScreenChange } from '../../actions/AppActions';
import parentCss from '../app/app.css';
import css from './head.css';
import icFullScreenIcon from '../../../static/icons/ic_fullScreen.svg';

const mapToDispatch = dispatch => ({
	changeFullScreenApp(argu) {
		dispatch(fullScreenChange(argu));
	},
});

const fullScreen = () => {
	if (screenfull.enabled) {
		screenfull.toggle();
	} else {
      // Ignore or do something else
	}
};

const Head = ({ changeFullScreenApp }) => {
	screenfull.onchange(() => {
		if (screenfull.isFullscreen) {
			changeFullScreenApp(true);
		} else {
			changeFullScreenApp(false);
		}
	});

	return (
		<div className={parentCss.head}>
			<div className={css.container}>
				<img
					className={css.icon}
					src={icFullScreenIcon}
					onClick={fullScreen}
				/>
			</div>
		</div>
	);
};

export default connect(undefined, mapToDispatch)(Head);
