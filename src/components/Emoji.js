/* eslint-disable react/no-unused-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/emojiStyles.module.css';

export default function Emoji(props) {
	const curProps = props;
	return (
		<div
			className={`${styles.emoji} ${styles[curProps.name]}`}
			aria-label={`${styles[curProps.name]}`}
			role="button"
			onClick={() => curProps.handleEmojiChosen(curProps.name)}
		/>
	);
}

Emoji.propTypes = {
	name: PropTypes.string.isRequired,
	handleEmojiChosen: PropTypes.func.isRequired,
};
