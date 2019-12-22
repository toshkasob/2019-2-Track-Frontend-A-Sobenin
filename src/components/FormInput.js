/* eslint-disable react/no-unused-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/formInputStyles.module.scss';

import { ReactComponent as SubmitSvg } from '../images/button_submit.svg';
import { ReactComponent as GeoSvg } from '../images/button_geo.svg';
import { ReactComponent as StartRecSvg } from '../images/button_rec_audio.svg';
import { ReactComponent as FinishRecSvg } from '../images/button_stop_audio.svg';
import { ReactComponent as ImgSvg } from '../images/button_attach_image.svg';

export default function FormInput(props) {
	const imgInput = React.createRef();
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
				disabled={curProps.flagRec.isBlocked}
			/>
			<button
				type="button"
				id="get-geo"
				className={styles.button_attach}
				onClick={curProps.attachGeo}
				disabled={curProps.flagRec.isBlocked}
			>
				<GeoSvg className={styles.button_attach_img} />
			</button>
			<button
				type="button"
				id="attach-image"
				className={styles.button_attach}
				disabled={curProps.flagRec.isBlocked}
				onClick={(e) => {
					if (imgInput) {
						imgInput.current.click();
					}
				}}
			>
				<ImgSvg className={styles.button_attach_img} />
			</button>
			<input
				type="file"
				ref={imgInput}
				accept="image/*"
				style={{ display: 'none' }}
				onChange={curProps.handleImage}
			/>
			<button
				type="button"
				id="start"
				className={styles.button_attach}
				onClick={curProps.handleRecordAudio}
				style={{ display: curProps.flagRec.startRec }}
			>
				<StartRecSvg className={styles.button_attach_img} />
			</button>
			<button
				type="button"
				id="stop"
				className={styles.button_attach}
				style={{ display: curProps.flagRec.stopRec }}
				onClick={curProps.handleStopRecord}
			>
				<FinishRecSvg className={styles.button_attach_img} />
			</button>

			<button
				type="submit"
				className={styles.button_submit}
				style={{ display: curProps.submitButtonDisplayStyle }}
				disabled={curProps.flagRec.isBlocked}
			>
				<SubmitSvg className={styles.button_submit_img} />
			</button>
		</div>
	);
}

FormInput.propTypes = {
	submitButtonDisplayStyle: PropTypes.string.isRequired,
	attachGeo: PropTypes.func.isRequired,
	handleImage: PropTypes.func.isRequired,
	handleRecordAudio: PropTypes.func.isRequired,
	handleStopRecord: PropTypes.func.isRequired,
	flagRec: PropTypes.any.isRequired,
	onChange: PropTypes.func.isRequired,
	placeholder: PropTypes.string.isRequired,
	value: PropTypes.string.isRequired,
};
