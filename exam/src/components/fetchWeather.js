
import React, { useState } from 'react';

import {API_KEY} from '../tools/API_KEY.js'

export default function FetchWeather(props){
    let {temp, pressure, humidity, id, name, country, lon, lat} = 0;
    // let [weather, setWeather] = useState({
    //     temp: 0,
    //     pressure: 0,
    //     humidity: 0,
    //     id: 0,
    //     name: '',
    //     country: '',
    //     lon: 0,
    //     lat: 0,
    // });
    const startURL = `https://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}&`
    const curProps = props;
    let endURL = '';
    if (curProps.method=='byCity') {
        endURL = `q=${curProps.city}`;
    } else if (curProps.method=='byGeo') {
        endURL = `lat=${curProps.lat}&lon=${curProps.lon}`
    }
    // debugger;
    const fullURL = startURL + endURL;
    const response = fetch(fullURL)
        .then(response => response.json())
        .then(json => 
            {
                debugger;
                let { temp, pressure, temp_min, temp_max } = json.main
                // {temp, pressure, humidity} = json.main
                // debugger;
                // {lon, lat} = json.coord
                // debugger;
                // country = json.sys
                // debugger;
                // id = json.id
                // debugger;
                // name = json.name
                // debugger;
                this.setWeather({
                    temp,
                    pressure,
                })
                this.setState({
                    temp,
                    pressure
                });
            }
        )
        .catch(function (error) {
            console.log('Request failed', error)
        });
    let tempet = this.state.temp;
    let perss = this.state.pressure;
    debugger;
    if (!response.ok) {
        alert('no any data');
        return;
    }
    debugger;
    const weatherJson = response.text();
    this.setState({
        weather: weatherJson
    });
    // props.weather = weatherJson;

}
