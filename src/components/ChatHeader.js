import React from 'react';
import { Link, useParams } from 'react-router-dom';
import styles from '../styles/appHeaderStyles.module.scss';

import { ReactComponent as Logo } from '../images/opponent_logo.svg';
import { ReactComponent as BackSvg } from '../images/header_buttons/button_back.svg';
import { ReactComponent as SearchSvg } from '../images/header_buttons/button_search.svg';
import { ReactComponent as SettingsSvg } from '../images/header_buttons/button_settings.svg';

const keyArrayChats = 'chatsArray';

export default function ChatHeader(props) {
	const { chatId } = useParams();
	const storageChatArray = JSON.parse(localStorage.getItem(keyArrayChats));
	// eslint-disable-next-line quotes
	let opponentName = "opponent's name";
	if (storageChatArray !== null) {
		opponentName = storageChatArray[chatId].opponent;
	}

	return (
		<div className={styles.app_header}>
			<Link to="/" className={styles.button}>
				<BackSvg className={styles.button_img} />
			</Link>
			<div className={styles.opponent}>
				<div className={styles.opponent_face}>
					<Logo className={styles.opponent_logo} />
				</div>
				<div className={styles.opponent_info}>
					<span className={styles.opponent_name}>{opponentName}</span>
					<span className={styles.opponent_status}>был(а) 2 часа назад</span>
				</div>
			</div>
			<button type="button" className={styles.button}>
				<SearchSvg className={styles.button_img} />
			</button>
			<button type="button" className={styles.button}>
				<SettingsSvg className={styles.button_img} />
			</button>
		</div>
	);
}
