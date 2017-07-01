// @flow
import React, { Component } from 'react';
// import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { graphql, compose } from 'react-apollo';
import VirtualizedSelect from 'react-virtualized-select';
import './react-select.global.css';
import './select-styles.global.css';
import './styles.global.css';
import { getTagList } from '../../../graphqls/TagGraphQl';
import css from './searchbox.css';


const Mock = [
	{ label: 'Chocolate', value: 'chocolate' },
	{ label: 'Vanilla', value: 'vanilla' },
	{ label: 'Strawberry', value: 'strawberry' },
	{ label: 'Caramel', value: 'caramel' },
	{ label: 'Cookies and Cream', value: 'cookiescream' },
	{ label: 'Peppermint', value: 'peppermint' },
];

const getTagListQuery = graphql(getTagList, {
	options: props => ({
		variables: {
			userId: SERVER ? props.userId : null,
			condition: 'All',
		},
		ssr: true,
	}),
	skip: process.env.NODE_ENV === 'development' && true,
	name: 'tagData',
});

const mapToState = state => ({
	userId: state.User._id,
});

type DefaultProps = {};

type Props = {};

type State = {
    disabled: boolean,
    crazy: boolean,
    options: Array<any>,
    value: Array<any>
};

@connect(mapToState)
@compose(getTagListQuery)
class SearchBox extends Component<DefaultProps, Props, State> {

	static defaultProps = {

	}

	constructor(props: Props) {
		super(props);
		this.handleSelectChange = this.handleSelectChange.bind(this);
	}

	state = {
		disabled: false,
		crazy: false,
		options: Mock,
		value: [],
	}

	handleSelectChange: Function;

	handleSelectChange(value: any) {
		this.setState({ value });
	}

	render() {
		return (
			<VirtualizedSelect multi simpleValue disabled={this.state.disabled} value={this.state.value} placeholder="노트에서 검색" options={this.state.options} onChange={this.handleSelectChange} />
		);
	}
}

export default SearchBox;
