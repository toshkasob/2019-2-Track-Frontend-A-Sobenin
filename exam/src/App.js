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
    this.state = {
      weather: {
        cityID: cityID,
        currentWeather: [],
      },
    }
  }
  componentDidMount() {
    // debugger;
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