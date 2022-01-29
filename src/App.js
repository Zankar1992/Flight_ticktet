import React from 'react';
// import SeatGenerate from './Components/SeatGenerate';
import FlightSearch from './Components/FlightSearch';
import Header from './Components/Header';

const App = () => {
  return (
    <>
      <div>
        <Header/>
        {/* <SeatGenerate /> */}
        <FlightSearch />
      </div>
    </>
  )
}

export default App;
