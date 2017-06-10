import React from 'react';
import PropTypes from 'prop-types';

import NoteCardTimeLine from '../src/components/note/noteCardTimeline/index.js';

describe('TEST JEST', () => {
	it('Test!', () => {
		const Mock = () => <div className="container" />;
		const noteContainer = shallow(<Mock className="container" />);
		expect(noteContainer.find(Mock)).to.have.length(1);
	});
});

describe('NoteCardTimeLine', () => {
	it('canRenderNoteCardTimeLine', () => {
		const wrapper = shallow(<NoteCardTimeLine />);
		expect(wrapper.find('.container')).to.have.length(1);
	});
});
