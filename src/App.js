import React, { useState } from 'react';
import Routes from './Routes';
import FlightData from './model/flightdata';


const App = () => {
  const usersData = FlightData;

  const initialState = {
    id: null,
    flight_no: "",
    origin: "",
    destination: "",
  };
  const [flight, setUsers] = useState(usersData);
  const [currentFlight, setCurrentFlight] = useState(initialState);
  const [editing, setEditing] = useState(false);

  const addFlight = (e) => {
    e.id = flight.length + 1;
    setUsers([...flight, e]);
  };

  // const deleteFlight = (id) => {
  //   setUsers(flight.filter((e) => e.id !== id));
  // };

  const updateFlight = (id, updatedUser) => {
    setEditing(false);

    setUsers(flight.map((flight) => (flight.id === id ? updatedUser : flight)));
  };

  const editFlight = (flight) => {
    setEditing(true);

    setCurrentFlight({
      id: flight.id,
      flight_no: flight.flight_no,
      origin: flight.origin,
      destination: flight.destination,
    });
  };

  return (
    <>
      <Routes />
    </>
  )
}

export default App;
