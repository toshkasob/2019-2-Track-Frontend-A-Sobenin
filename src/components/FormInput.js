/* eslint-disable react/no-unused-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/formInputStyles.module.scss';

import { ReactComponent as SubmitSvg } from '../images/button_submit.svg';
import { ReactComponent as GeoSvg } from '../images/button_geo.svg';

export default function FormInput(props) {
	const curProps = props;

	return (
		<div className={styles.form_input}>
			<input
				id="input"
				className={styles.input}
				type="text"
				value={curProps.value}
				placeholder={curProps.placeholder}
				onChange={curProps.onChange}
			/>
			<button
				type="button"
				className={styles.button_attach}
				onClick={curProps.attachGeo}
			>
				<GeoSvg className={styles.button_attach_img} />
			</button>
			<button
				type="submit"
				className={styles.button_submit}
				style={{ display: curProps.submitButtonDisplayStyle }}
			>
				<SubmitSvg className={styles.button_submit_img} />
			</button>
		</div>
	);
}

FormInput.propTypes = {
	submitButtonDisplayStyle: PropTypes.string.isRequired,
	attachGeo: PropTypes.func.isRequired,
	onChange: PropTypes.func.isRequired,
	placeholder: PropTypes.string.isRequired,
	value: PropTypes.string.isRequired,
};
