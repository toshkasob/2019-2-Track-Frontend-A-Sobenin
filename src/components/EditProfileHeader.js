import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/appHeaderStyles.module.scss';

import { ReactComponent as BackSvg } from '../images/header_buttons/button_back.svg';
import { ReactComponent as Submit } from '../images/button_submit.svg';

export default function EditProfileHeader(props) {
	return (
		<div className={styles.app_header}>
			<Link to="/" className={styles.button}>
				<BackSvg className={styles.button_img} />
			</Link>
			<span className={styles.header}>Edit Profile</span>
			<button type="submit" form="edit_profile" className={styles.button}>
				<Submit className={styles.button_img} />
			</button>
		</div>
	);
}
