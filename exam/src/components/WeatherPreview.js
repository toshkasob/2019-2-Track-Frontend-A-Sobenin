/* eslint-disable react/no-unused-prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from '../styles/weatherPreviewStyles.module.scss';


export default function WeatherPreview(props) {
	const curProps = props;
	return (
		<Link to={`/city_id=${curProps.id}`} className={styles.weather_preview}>
			<div className={styles.text_info}>
				<div className={styles.message_preview}>
					<span className={styles.opponent_name}>{curProps.cityName}</span>
					<span className={styles.lastmessage_text}>{curProps.latitText}</span>
					<span className={styles.lastmessage_text}>{curProps.longitText}</span>
				</div>
				<div className={styles.lastmessage_info}>
					<span className={styles.lastmessage_time}>{curProps.temperature}</span>
				</div>
			</div>
		</Link>
	);
}

WeatherPreview.propTypes = {
	id: PropTypes.number.isRequired,
	latitText: PropTypes.number.isRequired,
	longitText: PropTypes.number.isRequired,
	temperature: PropTypes.number.isRequired,
	cityName: PropTypes.string.isRequired,
};
