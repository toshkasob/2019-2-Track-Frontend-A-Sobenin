import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import MainPage from './components/MainPage';
import TrackedCities from './components/TrackedCities';
import {API_KEY} from './tools/API_KEY.js'

import './App.css';

export default class App extends React.Component{
  constructor(props){
    super(props);
    // debugger;
    var cityID = JSON.parse(window.localStorage.getItem('cityID'));
    if (cityID === undefined || cityID === null) {
      cityID = [524901, 571476, 534595, 7261214];
      window.localStorage.setItem('cityID', JSON.stringify(cityID));
    }
    // let { latitude, longitude } = this.getGeo();
    // if (latitude === undefined || latitude === null) {
    //  latitude = 361;
    //  longitude = 361; 
    // }
    // debugger;
    this.state = {
      weather: {
        cityID: cityID,
        currentWeather: [],
      },
      geo: {
        latitude: 361,
        longitude: 361,
      }
    }
  }

  componentDidMount() {
    // debugger;
    // this.getGeo();
    // this.getWeatherByGEO(this.state.geo);
    this.getWeatherByGEO();

    this.getWeatherByID();
  }
  getWeatherByID() {
    // debugger;
    const {cityID} = this.state.weather;
    const startURL = `https://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}&`
    let endURL = '';
    for (const i in cityID) {
      endURL = `id=${cityID[i]}`;
      // debugger;
      const fullURL = startURL + endURL + '&units=metric';
      fetch(fullURL)
        .then(response => response.json())
        .then(json_data => (
          this.setState((state) => {
            // debugger;
            state.weather.currentWeather.push(json_data);
            return state;
          })
        ));
  
    }
  }
  // getWeatherByGEO(position) {
  getWeatherByGEO() {

    debugger;
    let latitude = 361;
    let longitude = 361;
    this.getGeo(latitude, longitude);
    debugger;
    if (Math.abs(latitude) >360 || Math.abs(longitude) >360 )
      return;
    const startURL = `https://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}&`
    let endURL = `lat=${latitude}&lon=${longitude}`;
    debugger;
    const fullURL = startURL + endURL + '&units=metric';
    fetch(fullURL)
      .then(response => response.json())
      .then(json_data => (
        this.setState((state) => {
          // debugger;
          let tmp_cityID = [json_data.id, state.weather.cityID];
          let tmp_currentWeather = [json_data, state.weather.currentWeather];
          state.weather.cityID = tmp_cityID;
          state.weather.currentWeather = tmp_currentWeather;
          return state;
        })
      ));
  }

  getGeo(latitude, longitude) {
    if (!navigator.geolocation) {
      // alert('Geolocation is not supported by your browser =(');
      console.log('Geolocation is not supported by your browser =(');
    } else {
      const geoSuccess = (position) => {
                const coords = [position.coords.latitude, position.coords.longitude];

                // const { latitude, longitude } = position.coords;
                debugger;
                latitude = position.coords.latitude;
                longitude = position.coords.longitude;
                // return position.coords;
                // this.setState( (state) => {
                //   // cur_state = state.weather;
                //   debugger;
                //   state.geo.latitude = position.coords.latitude;
                //   state.geo.longitude = position.coords.longitude;
                //   return state;
                // })
                // this.getWeatherByGEO(position.coords);
      };
  
      const geoError = (error) => {
        // alert('Unable to retrieve your location... Try again =)');
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
  
  render (){
    return (
      <div className="App">
        <Router basename="/">
          <Route path="/main_page">
            <MainPage />
          </Route>
          <Route exact path="/">
            <TrackedCities data={this.state.weather}/>
          </Route>
        </Router>

      </div>
    );
  }
}

