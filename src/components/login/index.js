// @ flow
import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import css from './login.css';

const mapState = state => ({
	userId: state.User._id,
});

const Login = ({ userId }) => {
	if (!userId)	{
		return <Redirect to="/" />;
	}
	return <div className={css.container} />;
};

export default connect(mapState)(Login);
