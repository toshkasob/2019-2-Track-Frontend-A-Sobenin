import React from 'react';
import styles from '../styles/appHeaderStyles.module.scss';

import { ReactComponent as MenuSvg } from '../images/header_buttons/button_menu.svg';
import { ReactComponent as SettingsSvg } from '../images/header_buttons/button_settings.svg';

export default function ChatsListHeader(props) {
	return (
		<div className={styles.app_header}>
			<button type="button" className={styles.button}>
				<MenuSvg className={styles.button_img} />
			</button>
			<span className={styles.header}>My chats</span>
			<button type="button" className={styles.button}>
				<SettingsSvg className={styles.button_img} />
			</button>
		</div>
	);
}
