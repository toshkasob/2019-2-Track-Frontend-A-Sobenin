import React, { useState } from 'react';
import styles from '../styles/MainPageStyles.scss';

import WeatherFrames from './weatherFrames'
import FetchWeather from './fetchWeather'
import * as CitiesDefault from '../tools/cities_default.json'

import { ReactComponent as CreateFrameSvg } from '../images/button_createchat.svg';

export default function MainPage(props){

    let framesCount = 0;
	const [frames, setFrames] = useState(framesInit());
	const frameslistRef = React.createRef();


    const curProps=props;
    const [inputValue, setInputValue] = useState('');
    function handleChange(event) {
		const { value } = event.target;
		setInputValue(value);
	}

    function framesInit() {
        // debugger;
        let chatsInitArray = ['Moscow'];
        return chatsInitArray;
    }

    function handleSubmit (event) {
        event.preventDefault();
		if (inputValue === '') {
			return;
		}
		if (inputValue === ' '.repeat(inputValue.length)) {
			return;
		}

        const cityName = inputValue;
        setInputValue('');
        let cityObj = createCityObj(cityName);
        debugger;
        setFrames(cityObj);

    }

    function createCityObj(city) {
        debugger;
        let tmpObj = {
            method: 'byCity',
            city: city,
            lat: 0,
            lon: 0,
        }
        FetchWeather(tmpObj);
        debugger;
		const cityObj = {
			id: 0,
			cityName: city,
            latitude: 0,
            longitude: 0,
            temperature: 0,

		};
		return cityObj;
	}


	function handleAttachGeo() {
		if (!navigator.geolocation) {
			alert('Geolocation is not supported by your browser =(');
		} else {
			const geoSuccess = (position) => {
                const { latitude, longitude } = position.coords;
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
            {/* <button type="button" className={styles.create_frame} 
            // onClick={handleCreateframe}
            >
				<CreateFrameSvg className={styles.create_frame_img} />
			</button> */}
            <div ref={frameslistRef} className={styles.frames_list}>
                {frames}

            </div>
        </div>
    )
}