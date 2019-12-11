import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import FormInput from './FormInput';
import MessageUnit from './MessageUnit';
import styles from '../styles/messageFormStyles.module.scss';

const keyArrayChats = 'chatsArray';

export default function MessageForm(props) {
	const { chatId } = useParams();

	const [submitButtonDisplayStyle, letSubmitButtonShow] = useState('none');
	const [inputValue, setInputValue] = useState('');
	const [messages, setMessages] = useState(messagesInit);

	function handleChange(event) {
		const { value } = event.target;
		setInputValue(value);
		if (value !== '' && value !== ' '.repeat(value.length)) {
			letSubmitButtonShow('inline-block');
		} else {
			letSubmitButtonShow('none');
		}
	}

	function handleSubmit(event) {
		event.preventDefault();
		letSubmitButtonShow('none');

		if (inputValue === '') {
			return;
		}
		if (inputValue === ' '.repeat(inputValue.length)) {
			return;
		}

		const messageObj = createMessageObj(inputValue);
		setInputValue('');
		addMessage(messageObj);
		messageToLocal(messageObj);
	}

	function messagesInit() {
		const storageChatArray = JSON.parse(localStorage.getItem(keyArrayChats));
		const chatObj = storageChatArray[chatId];
		const messagesInitArray = [];

		for (let i = 0; i < chatObj.messages.length; i += 1) {
			messagesInitArray.push(chatObj.messages[i]);
		}

		return messagesInitArray;
	}

	function createMessageObj(messageText) {
		const messageObj = {
			messageText,
			messageAuthor: 'Owner',
			messageTime: new Date(),
		};
		return messageObj;
	}

	function buildMessage(messageObj, key) {
		let position = 'right_messages';
		if (messageObj.messageAuthor !== 'Owner') {
			position = 'left_messages';
		}

		const messageTime = new Date(messageObj.messageTime).toTimeString().slice(0, 5);

		const resultMessage = (
			<MessageUnit
				key={key}
				messageAuthor={messageObj.messageAuthor}
				messageText={messageObj.messageText}
				messageTime={messageTime}
				position={position}
			/>
		);

		return resultMessage;
	}

	function messagesReact() {
		const messagesR = [];
		for (let i = 0; i < messages.length; i += 1) {
			messagesR.push(buildMessage(messages[i], i));
		}

		return messagesR;
	}

	function addMessage(messageObj) {
		setMessages(messages.concat(messageObj));
	}

	function messageToLocal(messageObj) {
		const storageChatArray = JSON.parse(localStorage.getItem(keyArrayChats));
		if (storageChatArray[chatId].messages.length === 0) {
			storageChatArray[chatId].messages = [];
		}
		storageChatArray[chatId].messages.push(messageObj);
		localStorage.setItem(keyArrayChats, JSON.stringify(storageChatArray));
	}

	return (
		<div className={styles.message_form}>
			<form className={styles.form_chat} onSubmit={handleSubmit}>
				<div className={styles.chat_container}>{messagesReact()}</div>
				<FormInput
					placeholder="Сообщение"
					value={inputValue}
					onChange={handleChange}
					submitButtonDisplayStyle={submitButtonDisplayStyle}
				/>
			</form>
		</div>
	);
}
