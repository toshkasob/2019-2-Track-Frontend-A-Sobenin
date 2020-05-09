/* eslint-disable react/no-unused-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/emojiStyles.module.css';
import Emoji from './Emoji.js';
import emojiNames from '../assets/arrayEmojies.js';

export default function EmojiesKeyboard(props) {
	const curProps = props;
	if (!curProps.showEmojiesKeyboard) {
		// // eslint-disable-next-line no-console
		// console.log(curProps.showEmojiesKeyboard, 'return null');
		return null;
	}
	return (
		<div>
			<div className={styles.emojiesKeyboard}>
				{emojiNames.map((curName, curPos) => (
					<Emoji
						name={curName}
						// eslint-disable-next-line react/no-array-index-key
						key={curPos}
						handleEmojiChosen={curProps.handleEmojiChosen}
					/>
				))}
			</div>
		</div>
	);
}

EmojiesKeyboard.propTypes = {
	showEmojiesKeyboard: PropTypes.bool.isRequired,
	handleEmojiChosen: PropTypes.func.isRequired,
};
