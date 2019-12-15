/* eslint-disable react/no-unused-prop-types */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/messageUnitStyles.module.scss';

function MessageContent(props) {
	const curProps = props;
	let content = <div />;

	if (curProps.contentType === 'text') {
		const re = /(https:\/\/\S+[^\s.,> )\];'"!?])/;
		const parts = curProps.messageContent.split(re);

		for (let i = 1; i < parts.length; i += 2) {
			parts[i] = (
				<a
					className={styles.link}
					key={`link${i}`}
					target="_blank"
					rel="noopener noreferrer"
					href={parts[i]}
				>
					{parts[i]}
				</a>
			);
		}

		content = <div className={styles.message_text}>{parts}</div>;
	} else if (curProps.contentType === 'image') {
		content = (
			<img
				className={styles.image}
				src={curProps.messageContent}
				alt={curProps.messageContent}
				onLoad={() => {
					message.current.scrollIntoView();
					window.URL.revokeObjectURL(curProps.messageContent);
				}}
			/>
		);
	} else if (curProps.contentType === 'audio') {
		content = (
			// eslint-disable-next-line jsx-a11y/media-has-caption
			<audio
				src={curProps.messageContent}
				controls
				className={styles.audio}
				onLoad={() => {
					window.URL.revokeObjectURL(curProps.messageContent);
				}}
			/>
		);
	}

	return content;
}

const message = React.createRef();
export default function MessageUnit(props) {
	const curProps = props;
	useEffect(() => {
		message.current.scrollIntoView();
	});

	return (
		<div
			ref={message}
			className={`${styles.message_unit} ${styles[curProps.position]}`}
		>
			<div className={styles.message_author}>{curProps.messageAuthor}</div>
			<MessageContent
				messageContent={curProps.messageContent}
				contentType={curProps.contentType}
			/>
			<div className={styles.message_info}>
				<span className={styles.message_time}>{curProps.messageTime}</span>
			</div>
		</div>
	);
}

MessageUnit.propTypes = {
	messageAuthor: PropTypes.string.isRequired,
	messageContent: PropTypes.string.isRequired,
	contentType: PropTypes.string.isRequired,
	messageTime: PropTypes.string.isRequired,
	position: PropTypes.string.isRequired,
};
