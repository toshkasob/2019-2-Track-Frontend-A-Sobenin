import React from 'react';
import MainPage from '../components/MainPage'
import { HashRouter as Router, Route } from 'react-router-dom';

import './App.css';

export default class App extends React.Component{
  render (){
    return (
      <div className="App">
        <Router basename="/">
          <Route path="/main_page">
            <MainPage />
          </Route>
        </Router>

      </div>
    );
  }
}