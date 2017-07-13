// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { graphql, compose } from 'react-apollo';
import { Redirect } from 'react-router-dom';
import { Form, Text, FormError } from 'react-form';
import './firstUser.global.css';
import css from './firstUser.css';

type Store = {
  User: {
    userId: string,
    userName: string
  }
};

function mapToState({ User: { userId, userName } }: Store) {
	return {
		userId,
		userName,
	};
}

type DefaultProps = {
	userName: null
};

type Props = {
	userName: string
};

type State = {};

@connect(mapToState)
class FirstUser extends Component<DefaultProps, Props, State> {
	static defaultProps = {
		userName: null,
	};

	constructor(props: Props) {
		super(props);
	}

	state = {};

	render() {
		const { userName } = this.props;
		if (userName) {
			return <Redirect to="/" />;
		}
		return (
			<div className={css.container}>
				<div className={css.head}>
					<p className={css.headName}>Rian 노트에서 사용할 이름을 입력해 주세요.</p>
					<p className={css.subName}>국문, 영문, 숫자 혼용가능(10자 이내)</p>
				</div>
				<div className={css.middle}>
					<Form
						onSubmit={(values) => {
						}}
						validate={({ name }) => {
							if (!name || name.length >= 10) {
								return {
									errorSet: '입력하신 이름이 10자를 초과했습니다',
								};
							}
							return {
								errorSet: null,
							};
						}}
					>
						{({ submitForm, values }) => {
							let formBorderstyle;
							let rightBoxOpacity;
							if (!values.name) {
								formBorderstyle = {
									border: 'none',
								};
								rightBoxOpacity = {
									opacity: '0.38',
								};
							} else if (values.name.length > 10) {
								formBorderstyle = {
									border: '2px solid #ff3466',
								};
								rightBoxOpacity = {
									opacity: '0.38',
								};
							} else if (values.name.length <= 10) {
								formBorderstyle = { border: '2px solid #0088ff' };
								rightBoxOpacity = {
									opacity: '1',
								};
							}
							return (
								<form onSubmit={submitForm} className={css.form}>
									<div className={css.leftBox}>
										<Text
											className={css.formInput}
											style={formBorderstyle}
											field="name"
											placeholder="이름을 입력해주세요"
										/>

										<svg
											className={css.close}
											version="1.1"
											viewBox="0 0 24 24"
											enableBackground="new 0 0 24 24"
										>
											<path d="M16.5,8.4l-0.9-0.9L12,11.1L8.4,7.5L7.5,8.4l3.6,3.6l-3.6,3.6l0.9,0.9l3.6-3.6l3.6,3.6l0.9-0.9L12.9,12L16.5,8.4z" />
										</svg>
										<div className={css.leftBoxBottom}>
											<FormError className={css.formError} field="errorSet" />
											<div className={css.count}>
												{values.name ? `${values.name.length}/10` : '0/10'}
											</div>
										</div>
									</div>
									<div className={css.rightBox}>
										<button
											className={css.button}
											style={rightBoxOpacity}
											type="submit"
										>시작하기</button>
									</div>
								</form>
							);
						}}
					</Form>
				</div>
			</div>
		);
	}
}

export default FirstUser;
