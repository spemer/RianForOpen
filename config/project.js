/* eslint-disable import/prefer-default-export */
const IsAWS = process.env.AWS_IP !== undefined;
export const PORT = process.env.PORT || 4000;
export const IP_ENV = IsAWS ? 'riannote.com' : 'localhost:4000';
export const IP_ENV_APOLLO = IsAWS ? 'riannote.com' : 'localhost:4000';

export const APOLLO = {
	uri: `http://${IP_ENV_APOLLO}/api/graphql`,
};

export const BUNDLE_ANALYZER = {
	openAnalyzer: false,
};

export const CSS_VARIABLES = {
};
