import React from 'react';
import MessageUnit from '../components/MessageUnit';

export default {
	title: 'MessageUnit',
	component: MessageUnit,
};

// const curDate = new Date()
const curDate = new Date().toTimeString().slice(0, 5);
export const Message = () => (
	<MessageUnit
		messageAuthor="Owner"
		contentType="text"
		messageContent="Hello"
		messageTime={curDate}
		position="right_messages"
	/>
);
const curDateGeo = new Date().toTimeString().slice(0, 5);
export const MessageGeo = () => (
	<MessageUnit
		messageAuthor="Owner"
		contentType="text"
		messageContent="http://www.openstreetmap.org/#map=18/56.01226806640625/37.47481918334961"
		messageTime={curDateGeo}
		position="right_messages"
	/>
);
