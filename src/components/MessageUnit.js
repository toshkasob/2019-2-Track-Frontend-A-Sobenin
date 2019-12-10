/* eslint-disable react/no-unused-prop-types */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/messageUnitStyles.module.scss';

const message = React.createRef();
export default function MessageUnit(props) {
	const curProps = props;
	useEffect(() => {
		message.current.scrollIntoView();
	});

	return (
		<div ref={message} className={`${styles.message_unit} ${styles[curProps.position]}`}>
			<div className={styles.message_author}>{curProps.messageAuthor}</div>
			<div className={styles.message_text}>{curProps.messageText}</div>
			<div className={styles.message_info}>
				<span className={styles.message_time}>{curProps.messageTime}</span>
			</div>
		</div>
	);
}

MessageUnit.propTypes = {
	messageAuthor: PropTypes.string.isRequired,
	messageText: PropTypes.string.isRequired,
	messageTime: PropTypes.string.isRequired,
	position: PropTypes.string.isRequired,
};
