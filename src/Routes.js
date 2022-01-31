import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import FlightSearch from './Components/FlightSearch';
import SeatGenerate from './SeatGenerate';
import Header from './Header';
import AddNewFlight from './AddNewFlight';

class Routes extends Component {
  render() {
    return (
      <BrowserRouter>
      <Header/>
      <Switch>
        <Route path="/addnewflight" component={AddNewFlight}/>
        <Route path="/flightsearch" component={FlightSearch}/>
        <Route path="/" component={SeatGenerate}/>
      </Switch>
      </BrowserRouter>
    )
  }
}

export default Routes;
