import { shallow, render, mount } from 'enzyme';
import sinon from 'sinon';

global.shallow = shallow;
global.render = render;
global.mount = mount;
global.sinon = sinon;

// Skip createElement warnings but fail tests on any other warning
console.error = (message) => {
	if (!/(React.createElement: type should not be null)/.test(message)) {
		throw new Error(message);
	}
};
