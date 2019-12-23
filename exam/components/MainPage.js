import React, { useState } from 'react';
import styles from '../styles/MainPageStyles.css';

export default function MainPage(props){
    const curProps=props;
    const [inputValue, setInputValue] = useState('');
    function handleChange(event) {
		const { value } = event.target;
		setInputValue(value);
	}

    function handleSubmit (event) {
        event.preventDefault();
		if (inputValue === '') {
			return;
		}
		if (inputValue === ' '.repeat(inputValue.length)) {
			return;
		}

        const city = inputValue;
        setInputValue('');

    }

	function handleAttachGeo() {
		if (!navigator.geolocation) {
			alert('Geolocation is not supported by your browser =(');
		} else {
			const geoSuccess = (position) => {
                const { latitude, longitude } = position.coords;
                curProps.latitude = latitude;
                curProps.longitude = longitude;
                const posGeo = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
                alert(posGeo);
			};

			const geoError = (error) => {
				alert('Unable to retrieve your location... Try again =)');
				console.log(error.message);
			};

			const geoOptions = {
				enableHighAccuracy: true,
				maximumAge: 60000,
				timeout: 15000,
			};

			navigator.geolocation.getCurrentPosition(
				geoSuccess,
				geoError,
				geoOptions,
			);
		}
	}


    return (
        <div className={styles.form_page}>
            <form className={styles.form_city}onSubmit={handleSubmit}>
                <div className={styles.form_input}>
                    <input
                        id="input"
                        className={styles.input}
                        type="text"
                        value={inputValue}
                        onChange={handleChange}
                    />
                </div>
                <button
                    type="button"
                    id="get-geo"
                    onClick={handleAttachGeo}
                >
                    getGEO
                </button>

            </form>
        </div>
        <div className={styles.weather_in_city}>
            
        </div>
    )
}