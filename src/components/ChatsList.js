import React, { useState } from 'react';
import ChatPreview from './ChatPreview';
import styles from '../styles/chatsListStyles.module.scss';

import { ReactComponent as CreateChatSvg } from '../images/button_createchat.svg';

const keyArrayChats = 'chatsArray';

export default function ChatsList(props) {
	let chatsCount = 0;
	const [chats, setChats] = useState(chatsInit());
	const chatslistRef = React.createRef();

	function getChatProps(chatObj) {
		let lastmessageText = '';
		let lastmessageTime = '';

		if (chatObj.messages.length !== 0) {
			const lastmessageObj = chatObj.messages[chatObj.messages.length - 1];
			lastmessageText = lastmessageObj.messageText;
			lastmessageTime = new Date(lastmessageObj.messageTime)
				.toTimeString()
				.slice(0, 5);
		}

		const chatPreviewProps = {
			key: chatsCount,
			id: chatsCount,
			lastmessageText,
			lastmessageTime,
			opponentName: chatObj.opponent,
		};

		return chatPreviewProps;
	}

	function scrollToBottom() {
		const chatslist = chatslistRef.current;
		setTimeout(() => {
			chatslist.scrollTop = 9999;
		}, 0);
	}

	function chatsInit() {
		const storageChatsArray = JSON.parse(localStorage.getItem(keyArrayChats));
		if (storageChatsArray === null) {
			return [];
		}
		const chatsInitArray = [];
		for (; chatsCount < storageChatsArray.length; chatsCount += 1) {
			const chatPreviewProps = getChatProps(storageChatsArray[chatsCount]);
			chatsInitArray.push(
				<ChatPreview
					key={chatPreviewProps.key}
					id={chatPreviewProps.id}
					lastmessageText={chatPreviewProps.lastmessageText}
					lastmessageTime={chatPreviewProps.lastmessageTime}
					opponentName={chatPreviewProps.opponentName}
					onClickFunc={chatPreviewProps.onClickFunc}
				/>,
			);
		}
		return chatsInitArray;
	}

	function handleCreateChat() {
		const chatObj = createChatObj();
		addChat(chatObj);
		chatToLocal(chatObj);
		chatsCount += 1;
		scrollToBottom();
	}

	function createChatObj() {
		const chatObj = {
			id: chatsCount,
			opponent: 'Name',
			messages: [],
		};
		return chatObj;
	}

	function addChat(chatObj) {
		const chatPreviewProps = getChatProps(chatObj);
		setChats(
			chats.concat(
				<ChatPreview
					key={chatPreviewProps.key}
					id={chatPreviewProps.id}
					lastmessageText={chatPreviewProps.lastmessageText}
					lastmessageTime={chatPreviewProps.lastmessageTime}
					opponentName={chatPreviewProps.opponentName}
				/>,
			),
		);
	}

	function chatToLocal(chatObj) {
		let storageChatsArray = JSON.parse(localStorage.getItem(keyArrayChats));
		if (storageChatsArray === null) {
			storageChatsArray = [];
		}
		storageChatsArray.push(chatObj);
		localStorage.setItem(keyArrayChats, JSON.stringify(storageChatsArray));
	}

	return (
		<div ref={chatslistRef} className={styles.chats_list} data-qa="my-chats">
			{chats}
			<button
				type="button"
				data-qa="button-create-chat"
				className={styles.create_chat}
				onClick={handleCreateChat}
			>
				<CreateChatSvg className={styles.create_chat_img} />
			</button>
		</div>
	);
}
