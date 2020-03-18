import React from 'react';
import styles from '../styles/editProfileStyles.module.scss';

import { ReactComponent as EditProfileSvg } from '../images/camera_img.svg';

export default function EditProfile(props) {
	function handleSubmit(event) {
		event.preventDefault();
	}

	function handleInvalid(event) {
		event.target.setCustomValidity(
			'Should contain at least 5 and no more 32 letters or digits. (e.g. yo228)',
		);
	}

	return (
		<form
			id="edit_profile"
			className={styles.edit_profile}
			onSubmit={handleSubmit}
		>
			<div className={styles.profile_img_preview}>
				<EditProfileSvg className={styles.profile_img} />
			</div>
			<div
				className={`${styles.profile_input_div} ${styles.fullname_input_div}`}
			>
				<span className={styles.input_info}>Full name</span>
				<input className={styles.profile_input} data-qa="input-fullname" />
			</div>
			<div className={styles.comment2input_div} />
			<div
				className={`${styles.profile_input_div} ${styles.username_input_div}`}
			>
				<span className={styles.input_info}>Username</span>
				<input
					className={styles.profile_input}
					pattern="^[a-z][a-z0-9-_\.]{4,32}$"
					onInvalid={handleInvalid}
					data-qa="input-username"
				/>
			</div>
			<div className={styles.comment2input_div}>
				<span className={styles.comment2input}>
					At least 5 and no more 32 letters or digits
				</span>
			</div>
			<div
				className={`${styles.profile_input_div} ${styles.biodetails_input_div}`}
			>
				<span className={styles.input_info}>Bio</span>
				<textarea className={styles.profile_input} data-qa="input-bio" />
			</div>
			<div className={styles.comment2input_div}>
				<span className={styles.comment2input}>Any details about you</span>
			</div>
		</form>
	);
}
