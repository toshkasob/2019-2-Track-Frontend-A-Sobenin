/* eslint-disable react/no-unused-prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from '../styles/chatPreviewStyles.module.scss';

import { ReactComponent as LogoSvg } from '../images/opponent_logo.svg';

export default function ChatPreview(props) {
	const curProps = props;
	return (
		<Link
			to={`/chat_id=${curProps.id}`}
			className={styles.chat_preview}
			data-qa="link-to-chat"
		>
			<div className={styles.opponent_face}>
				<LogoSvg className={styles.opponent_logo} />
			</div>
			<div className={styles.text_info}>
				<div className={styles.message_preview}>
					<span className={styles.opponent_name}>{curProps.opponentName}</span>
					<span className={styles.lastmessage_text}>
						{curProps.lastmessageText}
					</span>
				</div>
				<div className={styles.lastmessage_info}>
					<span className={styles.lastmessage_time}>
						{curProps.lastmessageTime}
					</span>
				</div>
			</div>
		</Link>
	);
}

ChatPreview.propTypes = {
	id: PropTypes.number.isRequired,
	lastmessageText: PropTypes.string.isRequired,
	lastmessageTime: PropTypes.string.isRequired,
	opponentName: PropTypes.string.isRequired,
};
