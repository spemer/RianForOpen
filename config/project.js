/* eslint-disable import/prefer-default-export */
const IsAWS = process.env.AWS_IP !== undefined;
export const PORT = process.env.PORT || 4000;
export const IP_ENV = IsAWS ? process.env.AWS_IP : 'localhost';
export const APOLLO = {
	uri: `http://${IP_ENV}:${PORT}/api/graphql`,
};

export const BUNDLE_ANALYZER = {
	openAnalyzer: false,
};

export const CSS_VARIABLES = {
	headerHeight: '70px',
	navWidth: '120px',
	timelineWidth: '300px',
	rianColor: '#ff3466;',
};
