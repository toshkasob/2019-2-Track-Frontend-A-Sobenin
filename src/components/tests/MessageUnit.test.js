import React from 'react';
import renderer from 'react-test-renderer';

import MessageUnit from '../MessageUnit';

it('renders text message correctly', () => {
	const msgUnit = renderer
		.create(
			<div>
				<MessageUnit
					messageAuthor="Owner"
					contentType="text"
					messageContent="Good night!"
					messageTime="01:00"
					position="right_messages"
				/>
			</div>,
		)
		.toJSON();
	expect(msgUnit).toMatchSnapshot();
});
