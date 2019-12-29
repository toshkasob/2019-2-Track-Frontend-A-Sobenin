import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/weatherPreviewStyles.module.scss';

export default function TrackedCities(props) {
    // const all_weather = props.data;
    // const cityID = all_weather.cityID;
    // const cityWeather = all_weather.currentWeather;
    const {cityID, currentWeather}  = props.data;
// debugger;
    let list4preview = [];
    for (const i in currentWeather) {
        list4preview.push(
            <div className={styles.weather_card}>
                <Link to = {"/City/" + currentWeather[i].id}>
                    <div className={styles.weather_preview}>
                        <div className={styles.opponent_name}>
                            {currentWeather[i].name}
                            {', '}
                            {currentWeather[i].sys.country}
                        </div>
                        <div className={styles.lastmessage_time}>
                            {currentWeather[i].main.temp}
                        </div>
                    </div>
                </Link>
            </div>
        )
    }
    return (list4preview);

}