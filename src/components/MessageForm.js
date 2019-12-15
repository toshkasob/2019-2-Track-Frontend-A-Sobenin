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

	function handleAttachGeo() {
		if (!navigator.geolocation) {
			alert('Geolocation is not supported by your browser =(');
		} else {
			const geoSuccess = (position) => {
				const { latitude, longitude } = position.coords;
				const posGeo = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
				const messageObj = createMessageObj(posGeo);
				addMessage(messageObj);
				messageToLocal(messageObj);
			};

			const geoError = (error) => {
				alert('Unable to retrieve your location... Try again =)');
				console.log(error.message);
			};

			const geoOptions = {
				enableHighAccuracy: true,
				maximumAge: 60000,
				timeout: 15000,
			};

			navigator.geolocation.getCurrentPosition(
				geoSuccess,
				geoError,
				geoOptions,
			);
		}
	}

	function handleImage(event, files = event.target.files) {
		if (files.length && files[0].size <= 5000000) {
			// alert(files[0].type);
			const data = new FormData();
			const src = window.URL.createObjectURL(files[0]);
			data.append('image', files);
			const messageObj = createMessageObj(src, 'image');
			addMessage(messageObj);
			fetch('https://tt-front.now.sh/upload', {
				method: 'POST',
				body: data,
			});
		} else {
			alert('Sorry. Try another IMAGE with size (0, 5000000] bytes');
		}
	}

	function handleRecordAudio() {
		function manageEnter(enable) {
			const input = document.getElementById('input');
			const buttonImage = document.getElementById('attach-image');
			const buttonGeo = document.getElementById('get-geo');

			if (enable === false) {
				input.disabled = true;
				buttonImage.disabled = true;
				buttonGeo.disabled = true;
			} else {
				input.removeAttribute('disabled');
				buttonImage.removeAttribute('disabled');
				buttonGeo.removeAttribute('disabled');
			}
		}

		function recordAudio(stream) {
			const buttonStartRec = document.getElementById('start');
			const buttonFinishRec = document.getElementById('stop');
			const mediaRecorder = new MediaRecorder(stream);
			mediaRecorder.start();

			buttonFinishRec.style.display = 'inline-block';
			buttonStartRec.style.display = 'none';

			manageEnter(false);

			let chunks = [];

			mediaRecorder.addEventListener('dataavailable', (event) => {
				chunks.push(event.data);
			});

			mediaRecorder.addEventListener('stop', () => {
				const blob = new Blob(chunks, { type: mediaRecorder.mimeType });
				chunks = [];
				const audioURL = URL.createObjectURL(blob);
				addMessage(createMessageObj(audioURL, 'audio'));
				const data = new FormData();
				data.append('audio', blob);
				fetch('https://tt-front.now.sh/upload', {
					method: 'POST',
					body: data,
				});
			});

			buttonFinishRec.addEventListener(
				'click',
				() => {
					mediaRecorder.stop();
					buttonFinishRec.style.display = 'none';
					buttonStartRec.style.display = 'inline-block';
					manageEnter(true);
				},
				{ once: true },
			);
		}

		async function getMedia() {
			let stream = null;

			try {
				const constraints = { audio: true };
				stream = await navigator.mediaDevices.getUserMedia(constraints);
				recordAudio(stream);
			} catch (error) {
				console.log(error.message);
			}
		}

		getMedia();
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

	function createMessageObj(messageContent, contentType = 'text') {
		const messageObj = {
			messageAuthor: 'Owner',
			messageContent,
			contentType,
			messageTime: new Date(),
		};
		return messageObj;
	}

	function buildMessage(messageObj, key) {
		let position = 'right_messages';
		if (messageObj.messageAuthor !== 'Owner') {
			position = 'left_messages';
		}

		const messageTime = new Date(messageObj.messageTime)
			.toTimeString()
			.slice(0, 5);

		const resultMessage = (
			<MessageUnit
				key={key}
				messageAuthor={messageObj.messageAuthor}
				contentType={messageObj.contentType}
				messageContent={messageObj.messageContent}
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
					attachGeo={handleAttachGeo}
					handleImage={handleImage}
					handleRecordAudio={handleRecordAudio}
					submitButtonDisplayStyle={submitButtonDisplayStyle}
				/>
			</form>
		</div>
	);
}
