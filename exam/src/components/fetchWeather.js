
import React, { useState } from 'react';

let API_KEY = '39961b76c3604fc4d4d4422d057d1c1b';

export default function fetchWeather(props){
    const startURL = `https://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}&`
    const curProps = props;
    let endURL = '';
    if (curProps.method=='byCity') {
        endURL = `q=${curProps.city}`;
    } else if (curProps.method=='byGeo') {
        endURL = `lat=${curProps.lat}&lon=${curProps.lon}`
    }

    const response = fetch(startURL + endURL, {
        method: 'GET',
    });
    const weatherJson = response.json();
    this.setState({
        weather: weatherJson
    });
    // props.weather = weatherJson;

}
